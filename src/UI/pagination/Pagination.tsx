import PaginationForwardBtn from '../buttons/pagination-forward-btn/PaginationForwardBtn';
import PaginationBackBtn from '../buttons/pagination-back-btn/PaginationBackBtn';
import { S_Container, S_Span } from '@/UI/pagination/Pagination.styled';

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    handlePageChange: (direction: 'next' | 'prev') => void;
};

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    handlePageChange,
}) => {
    return (
        <S_Container>
            {currentPage !== 1 && (
                <PaginationBackBtn
                    onClick={() => handlePageChange('prev')}
                    disabled={currentPage === 1}
                />
            )}
            <S_Span>
                {currentPage} з {totalPages}
            </S_Span>
            {currentPage !== totalPages && (
                <PaginationForwardBtn
                    onClick={() => handlePageChange('next')}
                    disabled={currentPage === totalPages}
                />
            )}
        </S_Container>
    );
};

export default Pagination;
