import PaginationBtn from '../buttons/pagination-btn/PaginationBtn';
import { S_Container } from './Pagination.styled'

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
                        onClick={() => handlePageChange('prev')} 
                        disabled={currentPage === 1}>
                    </PaginationBtn>
                )
            }
            <span>
                Сторінка {currentPage} з {totalPages}
            </span>
            {
                currentPage !== totalPages && (
                    <PaginationBtn onClick={() => handlePageChange('next')} 
                        disabled={currentPage === totalPages}>
                    </PaginationBtn>
                )
            }
        </S_Container>
    );
}
 
export default Pagination;