import React from "react";
import { getPagesArray } from "../../../utils/pages";

const Pagination = ({ totalPages, page, changePage }) => {
    let pagesAarray = getPagesArray(totalPages)
    return (
        <div className={'page__wrapper'}>
            {pagesAarray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'page page__current' : 'page'}>
                    {p}
                </span>
            )}

        </div>
    )
}
export default Pagination