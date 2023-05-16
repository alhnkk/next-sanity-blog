const DarkModeToggle = ({ handleDarkMode }) => {
    return (
        <>
            <input
                type="checkbox"
                id="toggle"
                className="toggle--checkbox cursor-pointer"
                onClick={handleDarkMode}
            />

            <label
                for="toggle"
                className="toggle--label">

                <span
                    className="toggle--label-background" />
            </label>

            <div
                className="background" />
        </>
    )
}

export default DarkModeToggle;
