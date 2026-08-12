---
title: Topology of Matrix Groups
aliases:
  - Topological Properties of Matrix Groups
  - 矩阵群的拓扑
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
  - matrix-groups
  - topology
created: 2026-08-10
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 1, printed p. 262, PDF p. 274"
---

# Topology of Matrix Groups

## Ambient Topology

Identify $M_n(\mathbb R)$ with $\mathbb R^{n^2}$ and $M_n(\mathbb C)$ with $\mathbb R^{2n^2}$ by listing matrix entries. A matrix group inherits the corresponding Euclidean topology.

Matrix multiplication is polynomial in the entries, and inversion is continuous on $GL_n$ because
$$
P^{-1}=\frac{\operatorname{adj}(P)}{\det P}.
$$
Thus a matrix group is naturally a topological group.

## Main Notions

> [!info] Homeomorphism
> A map $f:X\to Y$ is a **homeomorphism** if it is continuous, bijective, and has continuous inverse.

> [!info] Path-Connectedness
> A space $X$ is **path-connected** if for every $x,y\in X$ there is a continuous map $\gamma:[0,1]\to X$ with $\gamma(0)=x$ and $\gamma(1)=y$.

> [!info] Compactness
> In finite-dimensional Euclidean space, a subset is compact exactly when it is closed and bounded.

## Reusable Tests

### Closed and Bounded Matrix Groups

The group $O_n$ is closed because it is the zero locus of the entries of $P^{\mathsf T}P-I$. It is bounded because every column has Euclidean length $1$. Therefore $O_n$ is compact.

In contrast, the hyperbolic matrices
$$
\begin{pmatrix}
\cosh t&\sinh t\\
\sinh t&\cosh t
\end{pmatrix}
$$
show that $O_{1,1}$ and $O_{3,1}$ are unbounded and hence noncompact.

### Continuous Invariants

If a continuous function takes values in a discrete set, it is constant along every path. For example, $\det:O_n\to\{1,-1\}$ separates components.

Likewise, if $a$ cannot vanish on a matrix group, the sign of $a$ is constant on paths. For $O_{1,1}$, the pair
$$
(\det P,\operatorname{sgn}p_{11})
$$
separates its four components.

### Compactness Obstruction

A continuous image of a compact space is compact. Hence there is no continuous group isomorphism from a compact matrix group onto a noncompact one. In particular, $O_4$ cannot be continuously isomorphic to $O_{3,1}$.

## Path-Connectedness of $SP_{2n}$

Every $P\in SP_{2n}$ has a polar decomposition $P=QR$, where $Q$ is orthogonal symplectic and $R$ is positive-definite symplectic. The path
$$
t\longmapsto QR^t
$$
connects $Q$ to $P$. The group of orthogonal symplectic matrices is isomorphic to $U_n$, which is path-connected by unitary diagonalization. Hence $SP_{2n}$ is path-connected.

This proof uses the spectral theorem and the existence and uniqueness of positive square roots of positive-definite matrices.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Symplectic Groups|Symplectic Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Indefinite Bilinear Forms and Lorentz Groups|Indefinite Bilinear Forms and Lorentz Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

Artin introduces the inherited geometry of classical groups and defines homeomorphism in this section. [S1, Ch. 9, §9.1, printed p. 262, PDF p. 274] The compactness, component, and polar-decomposition arguments above are independent derivations using standard finite-dimensional topology and the spectral theorem.
