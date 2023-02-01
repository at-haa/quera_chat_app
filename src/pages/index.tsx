import { Messenger } from "../components/Messenger"

interface HomePageProps extends React.PropsWithChildren {

}
export const HomePage: React.FunctionComponent = (props: HomePageProps): JSX.Element => {
    return (
        <Messenger/>
    )
}
