import PaginationBtn from '@/UI/buttons/pagination-btn/PaginationBtn';
import { S_Container, S_Span } from '@/UI/pagination/Pagination.styled';
import { FcRight, FcLeft } from 'react-icons/fc';

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
                <PaginationBtn
                    direction={<FcLeft size={24} />}
                    onClick={() => handlePageChange('prev')}
                    disabled={currentPage === 1}
                ></PaginationBtn>
            )}
            <S_Span>
                {currentPage} з {totalPages}
            </S_Span>
            {currentPage !== totalPages && (
                <PaginationBtn
                    direction={<FcRight size={24} />}
                    onClick={() => handlePageChange('next')}
                    disabled={currentPage === totalPages}
                ></PaginationBtn>
            )}
        </S_Container>
    );
};

export default Pagination;
