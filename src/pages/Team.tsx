import { useParams } from "react-router";

export default function Team() {
    const {teamId} = useParams();
    return <h1>Team ID: {teamId}</h1>
}