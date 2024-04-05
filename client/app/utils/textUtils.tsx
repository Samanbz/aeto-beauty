export const parseSpan = (text: string) => {
    let textParts = text.split("SPAN");
    return textParts.map((part, index) => (
        <>
            {index % 2 === 0 ? (
                parseBreak(part)
            ) : (
                <span>{parseBreak(part)}</span>
            )}
        </>
    ));
};

const parseBreak = (text: string) => {
    let textParts = text.split("\n");
    return textParts.map((part, index) => (
        <>
            {part}
            {index < textParts.length - 1 && <br />}
        </>
    ));
};
