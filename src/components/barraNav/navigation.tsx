"use client";

import { Home, ShoppingCart, Users, Receipt, CircleDollarSign ,  Settings, Icon, Menu } from "lucide-react";
import Link from "next/link";

// navegacion de los componentes de cada icono del menu
function barraNavegacion(){
     const itemsMenu = [
        {icon : Home, label: "Paguna Principal", href: ""},
        {icon: ShoppingCart, label: "Ventas", href: ""},
        {icon :Users, laber : "Usuarios", href: ""},
        {icon : Receipt, label : "Facturas", href: ""},
        {icon: CircleDollarSign, label : "Movimientoss", href: ""},
        {icon : Settings, label : "Configuracion", href: ""}
    ]
    
    return (
        <div className="w-64 bg-white h-screen p-4 flex flex-col"> 
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold">Purr<span className="text-orange-400">Coffee</span></h1>
          </div>
    
          {/* Navigacion del menu */}
          <nav className="flex-1">
            <ul className="space-y-2">
              {itemsMenu.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} 
                        className="flex items-center p-3 rounded-lg hover:bg-orange-50 text-gray-700">
                    <item.icon className="h-5 w-5 mr-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
    
         
        </div>
      );
}

export default barraNavegacion;
