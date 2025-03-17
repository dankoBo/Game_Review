import PaginationForwardBtn from '../buttons/pagination-forward-btn/PaginationForwardBtn';
import PaginationBackBtn from '../buttons/pagination-back-btn/PaginationBackBtn';
import { S_PaginationContainer, S_PaginationPage } from '@/UI/pagination/Pagination.styled';

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
        <S_PaginationContainer>
            {currentPage !== 1 && (
                <PaginationBackBtn
                    onClick={() => handlePageChange('prev')}
                    disabled={currentPage === 1}
                />
            )}
            <S_PaginationPage>
                {currentPage} з {totalPages}
            </S_PaginationPage>
            {currentPage !== totalPages && (
                <PaginationForwardBtn
                    onClick={() => handlePageChange('next')}
                    disabled={currentPage === totalPages}
                />
            )}
        </S_PaginationContainer>
    );
};

export default Pagination;
