export interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

export interface Usuarios {
  usuarios: Usuario[];
}

export interface Usuario {
  nombre: string;
  apellido: string;
  usuario: string;
  modelo: string;
  patente: string;
  color: string;
  tipoUsuario: string;
  opcion: string;
  password: string;
}

export interface Viaje {
  destino: string,
  precio: string,
  
}

