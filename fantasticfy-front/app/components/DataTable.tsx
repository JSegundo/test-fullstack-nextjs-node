import React from "react"
import { Users } from "../interfaces/userData"
import { FaLocationCrosshairs } from "react-icons/fa6"

const DataTable = ({ users }: Users) => {
  return (
    <table className="table">
      <caption>Lista de usuarios</caption>
      <thead>
        <tr>
          <th scope="col">Numero</th>
          <th scope="col">Nombre</th>
          <th scope="col">Correo</th>
          <th scope="col">Nombre de usuario</th>
          <th scope="col">Dirección</th>
          <th scope="col">Locación</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user) => (
          <tr key={user._id}>
            <td data-label="Numero">{user.externalId}</td>
            <td data-label="Nombre">{user.name}</td>
            <td data-label="Correo">{user.email}</td>
            <td data-label="Nombre de usuario">{user.username}</td>
            <td data-label="Dirección">{user.address}</td>
            <td data-label="Locación">
              <a
                href={`https://www.google.com/maps/@${user.coordinates?.lat},${user.coordinates?.lng},15z?entry=ttu`}
                target="_blank"
              >
                <FaLocationCrosshairs />
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DataTable
