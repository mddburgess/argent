export interface ApplicationInfo {
    git?: GitInfo;
    build?: BuildInfo;
}

interface GitInfo {
    branch: string;
    commit: GitCommitInfo;
}

interface GitCommitInfo {
    id: string;
}

interface BuildInfo {
    version: string;
}
