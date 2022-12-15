import styled from '@emotion/styled';
import { variant } from 'styled-system';
import Box from 'components/atoms/box.atom';

export const RoundedImage = styled(Box)`
  background-image: url('${(props) => props.src || ''}');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: ${(props) => props.borderRadius || '50%'};
  height: ${(props) => props.height || '48px'};
  width: ${(props) => props.width || '48px'};
  border: ${(props) => props.borderStyle || 'none'};
  object-fit: ${({ objectFit }) => objectFit || 'unset'};
  cursor: ${(props) => props.cursor || 'auto'};
`;

export const ProfileWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #d6d6d6;
`;

export const SidebarWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  background: #fff;
  height: 100%;
  padding: 16px 0px;
  justify-content: space-between;
  width: 100%;
  border-right: 1px solid #d6d6d6;
`;

export const Text = styled(Box)`
  color: #fff;
  font-size: 14px;
  margin-left: 8px;
`;

export const ProfileText = styled(Box)`
  font-size: 14px;
  margin-left: 8px;
  font-weight: 400;
  color: #4f4f4f;
`;

export const LogoWrapper = styled(Box)`
  color: #0a2e36;
  font-size: 14px;
  margin-top: 8px;
  margin-bottom: 8px;
  justify-content: start;
  display: flex;
  cursor: pointer;
`;

export const HeadingWrapper = styled(Box)`
  color: #256fef;
  font-size: 16px;
  font-weight: 700;
`;

export const SidebarItem = styled(Box)`
  display: flex;
  cursor: pointer;
  font-weight: 500;
  user-select: none;
  padding: 24px 12px;
  transition: ease 0.3s;
  ${variant({
    prop: 'isSelected',
    variants: {
      true: {
        background: '#F6F9FD',
        color: '#256fef',
        borderRight: '4px solid #256fef',
      },
      false: {
        background: '#fff',
        color: '#4f4f4f',
        '&: hover': {
          backgroundColor: '#F6F9FD',
        },
      },
    },
  })};
`;
