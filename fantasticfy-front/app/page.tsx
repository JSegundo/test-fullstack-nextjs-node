import { getUsers } from "./actions/getUsers"
import "./page.css"
import DataTable from "./components/DataTable"

export default async function Home() {
  const users = await getUsers()

  return (
    <main>
      <DataTable users={users} />
    </main>
  )
}
