import { useState } from 'react';
import './style.css';
import {AiOutlineFolder, AiOutlineFile} from 'react-icons/ai'

export type TreeViewProps = {
    id?: string;
    name?: string;
    type?: 'folder' | 'file';
    isLeaf?: boolean;
    children?: TreeViewProps[];
}

type TreeProps = {
    data: TreeViewProps
    level: number
}

export const SmartTree: React.FC<TreeViewProps> = (props) =>
{

    const smartTreeViewProps = {
        ...props,
    };

    return (
        <SmartTreeView {...smartTreeViewProps} />
    );
};

export const SmartTreeView: React.FC<TreeViewProps> = (props) =>
{
    return (
        <div className='wrapper'>
            {
                props.children?.map((item, key) => (
                    <SmartTreeItem
                        key={key}
                        data={item}
                        level={0}
                    />
                ))
            }
        </div>
    );
};

export const SmartTreeItem: React.FC<TreeProps> = (props) =>
{
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    const {name, type, children} = props.data;
    const {level} = props;

    return (
        <div>
            <div onClick={toggleExpand}  style={{paddingLeft: `${level*12}px`}} className='smart-tree__wrapper'>
            {
                type === 'folder' ? (
                    expanded ? (
                    <AiOutlineFolder />
                    ) : (
                    <AiOutlineFolder style={{ transform: 'rotate(-90deg)' }} />
                    )
                ) : (
                    <AiOutlineFile />
                )
            }
            <span>{name + ` level: ${level}`}</span>
            </div>
            {
                expanded && children && children.map((childNode) => (
                    <SmartTreeItem key={childNode.name} data={childNode} level={level + 1}/>
                ))
            }
      </div>
    );
};

