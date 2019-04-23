/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 *
 * @author usager
 */
public class ConnectionBD {
    
    private static String url = "jdbc:derby://localhost:1527/commerce";
        //Les identifiants de connection de la bd
	private static String user = "";
	private static String pwd = "";
	private static Connection conn = null;
	public static Connection getConnection(){
		try {
                    //chargement du driver
			Class.forName("com.mysql.jdbc.Driver");
	//DriverManager est responsable de la sélection de la BD et
        //la création de la connexion

			conn = DriverManager.getConnection(url, user, pwd);
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}		
		return conn;
	}
	
	public static void closeConnection(){
		try {
			conn.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}		
	}
    
}
