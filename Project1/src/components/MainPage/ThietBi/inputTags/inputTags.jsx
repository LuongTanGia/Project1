import { useState } from "react";
import "./inputTags.css";

const TagsInput = ({ values, onChange, color }) => {
    const [tag, setTag] = useState("");
    const [tags, setTags] = useState(values);

    const handleChange = (e) => {
        const { value } = e.target;
        setTag(value);
    };

    const handleKeyDown = (e) => {
        const { key } = e;
        const newTag = tag.trim();

        if (
            (key === "," || key === "Enter" || key === "Tab") &&
            newTag.length &&
            !tags.includes(newTag)
        ) {
            e.preventDefault();
            setTags((prevTags) => {
                const latesTags = [...prevTags, newTag];
                onChange(latesTags);
                return latesTags;
            });
            setTag("");
        } else if (key === "Backspace" && !newTag.length && tags.length) {
            e.preventDefault();

            const tagsCopy = [...tags];
            const lastTag = tagsCopy.pop();

            setTags(tagsCopy);
            onChange(tagsCopy);
            setTag(lastTag);
        }
    };

    const removeTag = async (index) => {
        setTags((prevTags) => {
            const latestTags = prevTags.filter((tag, i) => i !== index);
            onChange(latestTags);
            return latestTags;
        });
    };

    const getColor = () => {
        const colors = [
            "color-default",
            "color-green",
            "color-red",
            "color-blue",
            "color-yellow",
            "color-orange",
        ];

        return colors.includes(`color-${color}`)
            ? `color-${color}`
            : `color-default`;
    };

    return (
        <div className="tags-input-wrapper">
            {tags.map((tag, index) => (
                <div key={index} className={`tag-item ${getColor()}`}>
                    <span className="titles">{tag}</span>
                    <button
                        className="remove-btn"
                        onClick={() => removeTag(index)}
                    >
                        &times;
                    </button>
                </div>
            ))}
            <input
                type="text"
                value={tag}
                onChange={handleChange}
                className="tag-input"
                onKeyDown={handleKeyDown}
            />
        </div>
    );
};

export default TagsInput;
