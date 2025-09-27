'use client'

import dynamic from 'next/dynamic'
import VoxelDogLoader from '../components/voxel-dog-loader'

export const LazyVoxelDog = dynamic(() => import('../components/voxel-dog'), {
    ssr: false,
    loading: () => <VoxelDogLoader />,
})
