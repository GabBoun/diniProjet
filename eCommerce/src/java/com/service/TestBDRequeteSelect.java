/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.service;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 *
 * @author usager
 */
public class TestBDRequeteSelect {
    
    public static void main(String[] args) {
		// TODO Auto-generated method stub
		String sql = "select * from PRODUIT";
		
		try {
			PreparedStatement ps= ConnectionBD.getConnection().prepareStatement(sql);
			       ResultSet  result =  ps.executeQuery();
                               //Optionnel : Renvoyer un booléen qui indique 
                               //si la position courante du curseur se trouve
                               //avant la première ligne
			       if (result.isBeforeFirst()) {
                                   //La méthode next() pour se déplacer sur le suivant
					 while (result.next()) {
						System.out.println(result.getString("nom"));
					}
				}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		ConnectionBD.closeConnection();

	}
    
}
