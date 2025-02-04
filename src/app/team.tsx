import type { Route } from './+types/team'

export async function loader({params}: Route.LoaderArgs) {
    let team = await fetchTeam(params.teamId);
    return {name: team.name}
} 

export default function Component({
    loaderData,
}: Route.ComponentProps) {
    return <h1>{loaderData.name}</h1>
}