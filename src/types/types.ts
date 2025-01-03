export interface Item {
  id: number;
  tenantId: string;
  name: string;
  memo: string | null;
  imageUrl: string | null;
  isCompleted: boolean;
}

export interface UpdateItemDto {
  name: string;
  memo: string;
  imageUrl: string;
  isCompleted: boolean;
}

export interface mainDatas {
  id: number;
  name: string;
  isCompleted: boolean;
}

export interface modifyData {
  name: string;
  memo: string;
  imageUrl: string;
  isCompleted: boolean;
}
