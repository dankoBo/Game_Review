import PaginationBtn from '../buttons/pagination-btn/PaginationBtn';
import { S_Container, S_Span } from './Pagination.styled';
import { FcNext, FcPrevious } from "react-icons/fc";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    handlePageChange: (direction: 'next' | 'prev') => void;
};

const Pagination: React.FC<PaginationProps> = ({  currentPage, totalPages, handlePageChange }) => {
    return (
        <S_Container>
            {
                currentPage !== 1 && (
                    <PaginationBtn
                        direction={<FcPrevious />} 
                        onClick={() => handlePageChange('prev')} 
                        disabled={currentPage === 1}>
                    </PaginationBtn>
                )
            }
            <S_Span>
                {currentPage} з {totalPages}
            </S_Span>
            {
                currentPage !== totalPages && (
                    <PaginationBtn
                        direction={<FcNext />}
                        onClick={() => handlePageChange('next')} 
                        disabled={currentPage === totalPages}>
                    </PaginationBtn>
                )
            }
        </S_Container>
    );
}
 
export default Pagination;