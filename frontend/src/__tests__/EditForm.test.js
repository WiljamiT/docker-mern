import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EditForm from "../components/EditForm";

describe("EditForm component", () => {
    it("renders with initial values", () => {
        const editedMovie = {
            title: "Movie Title",
            description: "Movie Description",
        };

        const { getByLabelText } = render(
            <EditForm editedMovie={editedMovie} onUpdate={() => { }} onCancel={() => { }} onChange={() => { }} />
        );

        expect(getByLabelText("Title:")).toHaveValue("Movie Title");
        expect(getByLabelText("Description:")).toHaveValue("Movie Description");
    });

    it("calls onUpdate callback when 'Update' button is clicked", () => {
        const onUpdateMock = jest.fn();
        const { getByText } = render(
            <EditForm editedMovie={{}} onUpdate={onUpdateMock} onCancel={() => { }} onChange={() => { }} />
        );

        fireEvent.click(getByText("Update"));

        expect(onUpdateMock).toHaveBeenCalled();
    });

    it("calls onCancel callback when 'Cancel' button is clicked", () => {
        const onCancelMock = jest.fn();
        const { getByText } = render(
            <EditForm editedMovie={{}} onUpdate={() => { }} onCancel={onCancelMock} onChange={() => { }} />
        );

        fireEvent.click(getByText("Cancel"));

        expect(onCancelMock).toHaveBeenCalled();
    });

    it("calls onChange callback when input values change", () => {
        const onChangeMock = jest.fn();
        const { getByLabelText } = render(
            <EditForm editedMovie={{}} onUpdate={() => { }} onCancel={() => { }} onChange={onChangeMock} />
        );

        fireEvent.change(getByLabelText("Title:"), { target: { value: "New Title" } });
        fireEvent.change(getByLabelText("Description:"), { target: { value: "New Description" } });

        expect(onChangeMock).toHaveBeenCalledTimes(2);
        expect(onChangeMock).toHaveBeenCalledWith(expect.any(Object));
    });
});