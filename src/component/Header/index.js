import './styles.css'

export const Header = ({children}) => {

    return (
        <header className="text-center p-4">
            <h1 className="text-3xl font-bold">Popular Movies</h1>
            {children}
        </header>
    );
}