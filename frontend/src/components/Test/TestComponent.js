import React, { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import TestContent from "./TestContent";
import { CircularProgress } from "@mui/material";

const TestComponent = () => {
    const apiUrl = process.env.REACT_APP_API_URL_AZ;
    const { loading, data: sqlData, error } = useFetch(apiUrl);

    const [testData, setTestData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        if (sqlData) {
            setTestData(sqlData);
            setTotalPages(Math.ceil(sqlData.length / 5));
        }
    }, [sqlData]);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    if (loading) return <p><CircularProgress /></p>;
    if (error) return <p>Error!</p>;

    console.log("ASDASDASDASDASD, ", testData)

    return (
        <TestContent
            testData={testData}
            totalTestData={totalPages}
            currentPage={page}
            handlePageChange={handlePageChange}
        />
    );
};

export default TestComponent;
