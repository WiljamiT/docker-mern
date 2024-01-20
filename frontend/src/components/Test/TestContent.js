import React from "react";
import { Pagination } from "@mui/material";
import text from "../../strings.json";
import TestCard from "./TestCard";
import "./TestContent.css";

const TestContent = ({
    testData,
    totalTestData,
    currentPage,
    handlePageChange,
    onDelete,
    onEdit,
}) => {
    const getPaginatedTestData = () => {
        const startIndex = (currentPage - 1) * 5;
        const endIndex = startIndex + 5;
        return testData.slice(startIndex, endIndex);
    };

    return (
        <main className="test_container">
            <h1 className="test_heading">{text.strings.header.az}</h1>
            <p className="sub_heading">{text.strings.header.main}</p>

            <ul className="test_list">
                {getPaginatedTestData().map((data) => (
                    <TestCard
                        key={!data.ID ? data.id : null}
                        data={data}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                ))}
            </ul>

            <Pagination
                count={totalTestData}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
                style={{ marginTop: "20px" }}
            />
        </main>
    );
};

export default TestContent;
