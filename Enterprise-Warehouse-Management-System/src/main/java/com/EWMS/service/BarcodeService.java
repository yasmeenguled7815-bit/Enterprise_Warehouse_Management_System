package com.EWMS.service;

import java.io.File;

import org.springframework.stereotype.Service;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.MultiFormatWriter;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;

@Service
public class BarcodeService {

	public String generateBarcode(String sku) throws Exception{
		String path="barcodes/"+sku+".png";
		
		BitMatrix matrix=new MultiFormatWriter().encode(sku,BarcodeFormat.CODE_128, 300,100);
		
		MatrixToImageWriter.writeToPath(matrix,"PNG",new File(path).toPath());
		
		return path;
	}
}
