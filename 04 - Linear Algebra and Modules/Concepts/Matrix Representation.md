---
title: Matrix Representation
aliases:
  - Matrix Units
  - Matrix Unit
  - Elementary Matrices
  - Special Matrices
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
created: 2026-01-19
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, §§1.1–1.2, printed pp. 6 and 9–11, PDF pp. 18 and 21–23; Ch. 4, §§4.2–4.3, printed pp. 104–110, PDF pp. 116–122"
source_status: partially-verified
status: not-started
---

# Matrix Representation

## Basic Matrix Notation

Let $F$ be a field and let $m,n\ge1$. The vector space $M_{m\times n}(F)$ consists of all $m\times n$ matrices $A=(a_{ij})$ with entries in $F$: the first index specifies the row, and the second specifies the column. Write $M_n(F)$ when $m=n$.

Throughout this note, vectors in $F^n$ are columns. The [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension#Standard Coordinate Basis|standard coordinate vector]] $e_j$ has a $1$ in position $j$ and zeros elsewhere. We use the **Kronecker delta**
$$
\delta_{ij}=
\begin{cases}
1,&i=j,\\
0,&i\ne j.
\end{cases}
$$
This symbol tests equality of indices; it is not a matrix.

## Matrix Units

> [!info] Definition (Matrix Unit)
> For $1\le i\le m$ and $1\le j\le n$, the **matrix unit** $E_{ij}\in M_{m\times n}(F)$ has a single $1$ in row $i$, column $j$, and zeros elsewhere:
> $$
> (E_{ij})_{k\ell}=\delta_{ki}\delta_{\ell j}.
> $$
> Its size is determined by the ambient matrix space.

For example, in $M_{2\times3}(F)$,
$$
E_{23}=\begin{pmatrix}0&0&0\\0&0&1\end{pmatrix}.
$$
Thus $e_j$ is an $n\times1$ column vector, whereas $E_{ij}$ is an $m\times n$ matrix. Artin writes the latter as $e_{ij}$; this note uses uppercase $E_{ij}$ to distinguish these two objects. The word "unit" here does not mean an invertible element: for $n>1$, an individual matrix unit in $M_n(F)$ has image contained in the line $Fe_i$ and cannot be invertible.

Every matrix has the expansion
$$
A=\sum_{i=1}^m\sum_{j=1}^n a_{ij}E_{ij}.
$$
Looking at entry $(i,j)$ shows both that this expansion equals $A$ and that its coefficients are unique. Hence the $mn$ matrix units form the [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension#Standard Matrix Basis|standard basis of the matrix space]].

For compatible sizes, the basic multiplication rules are
$$
E_{ij}^{m\times n}e_k^{(n)}=\delta_{jk}e_i^{(m)},\qquad
E_{ij}^{m\times n}E_{k\ell}^{n\times p}
=\delta_{jk}E_{i\ell}^{m\times p}.
$$
Here superscripts indicate sizes, not powers. The first formula follows because $E_{ij}$ reads coordinate $j$ and puts it in position $i$. To prove the second, apply both sides to each $e_s^{(p)}$: both produce $\delta_{\ell s}\delta_{jk}e_i^{(m)}$.

For square units, this also gives
$$
E_{ij}=e_i e_j^{\mathsf T},\qquad
E_{ij}^2=\delta_{ij}E_{ij},\qquad
I_n=\sum_{i=1}^n E_{ii}.
$$
In particular, $E_{ii}^2=E_{ii}$, while $E_{ij}^2=0$ for $i\ne j$. See [[04 - Linear Algebra and Modules/Exercises/Exercise LA33 - Products with Matrix Units|Exercise LA33]] for extraction of rows, columns, and entries by matrix units.

## Special Matrices

> [!info] Definitions (Basic Matrix Patterns)
> The following conditions describe the entries of a matrix. Except for the zero matrix, the matrices in this table are square, with size $n\times n$.
>
> | Name | Definition |
> |------|------------|
> | Zero matrix $0_{m\times n}$ | Every entry equals $0$. |
> | Identity matrix $I_n$ | $(I_n)_{ij}=\delta_{ij}$. |
> | Scalar matrix $cI_n$ | Every diagonal entry equals the same scalar $c\in F$, and every off-diagonal entry is $0$. |
> | Diagonal matrix $\operatorname{diag}(d_1,\ldots,d_n)$ | Entry $(i,i)$ is $d_i$, and $a_{ij}=0$ whenever $i\ne j$. |
> | Upper triangular matrix | $a_{ij}=0$ whenever $i>j$. |
> | Lower triangular matrix | $a_{ij}=0$ whenever $i<j$. |
> | Strictly upper triangular matrix | $a_{ij}=0$ whenever $i\ge j$, including the diagonal. |
> | Strictly lower triangular matrix | $a_{ij}=0$ whenever $i\le j$, including the diagonal. |
> | Upper unitriangular matrix | Upper triangular, with $a_{ii}=1$ for every $i$. |
> | Lower unitriangular matrix | Lower triangular, with $a_{ii}=1$ for every $i$. |

The diagonal entries are allowed to vanish in a diagonal or triangular matrix. Scalar matrices are a special case of diagonal matrices; $I_n$ and $0_{n\times n}$ are scalar matrices. A matrix that is both upper and lower triangular is diagonal, since the two conditions force every off-diagonal entry to vanish. For $A\in M_{m\times n}(F)$,
$$
I_mA=A=AI_n,
$$
as follows directly from the Kronecker-delta entries of the two identity matrices.

Upper unitriangular means $I_n+N$ with $N$ strictly upper triangular; its diagonal entries are $1$, whereas a strictly upper triangular matrix has diagonal entries $0$. The lower triangular versions have the same distinction.

> [!example] Distinguishing the Patterns
> Over $\mathbb R$,
> $$
> \begin{pmatrix}2&0\\0&3\end{pmatrix}
> \quad\text{is diagonal but not scalar},\qquad
> \begin{pmatrix}2&5\\0&3\end{pmatrix}
> \quad\text{is upper triangular but not diagonal}.
> $$
> The matrix $\begin{pmatrix}0&5\\0&0\end{pmatrix}$ is strictly upper triangular.

Permutation matrices have exactly one $1$ in each row and column, with all other entries $0$; their indexing convention and multiplication are defined in [[01 - Group Theory/Concepts/Symmetric Groups#Permutation Matrices|Symmetric Groups]]. Over $\mathbb R$, they are orthogonal matrices.

Other common conditions use the [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms#Transpose and Conjugate Transpose|transpose or conjugate transpose]]. In the following table, every matrix is square:

| Name | Scalar field | Definition |
|------|--------------|------------|
| Symmetric matrix | Any field $F$ | $A^{\mathsf T}=A$, equivalently $a_{ij}=a_{ji}$. |
| [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms#Hermitian Matrices|Hermitian matrix]] | $\mathbb C$ | $H^*=H$, where $H^*=\overline H^{\mathsf T}$. |
| [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups#Orthogonal Matrices|Orthogonal matrix]] | $\mathbb R$ | $Q^{\mathsf T}Q=I_n$, equivalently $Q^{-1}=Q^{\mathsf T}$. |
| [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups#Unitary Matrices|Unitary matrix]] | $\mathbb C$ | $U^*U=I_n$, equivalently $U^{-1}=U^*$. |

For real matrices, Hermitian means symmetric and unitary means orthogonal. Symmetry or Hermitian symmetry compares a matrix with its transpose or adjoint; orthogonality or unitarity compares the transpose or adjoint with its inverse. These conditions are distinct. Definitions, proofs, and examples are given in the linked sections.

## Elementary Matrices

> [!info] Definition (Elementary Matrix)
> An **elementary matrix** is obtained from $I_n$ by one elementary row operation. Left multiplication by this matrix performs that operation on any matrix with $n$ rows. The three types are listed below; $i\ne j$, $a\in F$, and $c\in F^\times$.

| Row operation | Elementary matrix | Inverse |
|---------------|-------------------|---------|
| Add $a$ times row $j$ to row $i$ | $T_{ij}(a)=I_n+aE_{ij}$ | $T_{ij}(-a)$ |
| Swap rows $i,j$ | $S_{ij}=I_n-E_{ii}-E_{jj}+E_{ij}+E_{ji}$ | $S_{ij}$ |
| Multiply row $i$ by $c\ne0$ | $D_i(c)=I_n+(c-1)E_{ii}$ | $D_i(c^{-1})$ |

The row effects follow from the entries of these matrices: $(T_{ij}(a)A)_{ik}=a_{ik}+a\,a_{jk}$, the two affected rows of $S_{ij}A$ are exchanged, and row $i$ of $D_i(c)A$ is scaled by $c$. All other rows stay fixed. Each inverse reverses the corresponding operation, so all three types are invertible. The nonzero condition on $c$ is essential.

For right multiplication, $AT_{ij}(a)$ adds $a$ times **column $i$ to column $j$**. This follows from $Ae_i e_j^{\mathsf T}$: it places column $i$ of $A$ in column $j$ and makes the other columns zero. Similarly, $AS_{ij}$ swaps columns $i,j$, and $AD_i(c)$ scales column $i$.

> [!warning] Matrix units and elementary matrices
> $E_{ij}$ and $I_n+aE_{ij}$ are different objects. For $i\ne j$, the first has square zero and is singular, while the second is an invertible elementary matrix. A permutation matrix for a single transposition is elementary; a general permutation matrix need not come from one elementary row operation.

If row operations $R_1,\ldots,R_r$ are performed in that order, with elementary matrices $Q_1,\ldots,Q_r$, the final matrix is
$$
Q_r\cdots Q_2Q_1A.
$$
The first operation acts on $A$ first, so its matrix is nearest to $A$. This order is used in [[04 - Linear Algebra and Modules/Exercises/Exercise LA34 - Elementary Matrices in a Row Reduction|Exercise LA34]].

## Definition

> [!info] Definition (Matrix of a Linear Transformation)
> Let $T: V \to W$ be a [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|linear transformation]] between finite-dimensional $F$-vector spaces, with [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension#Ordered Bases and Coordinates|ordered bases]] $\mathcal{B} = (v_1, \ldots, v_n)$ for $V$ and $\mathcal{C} = (w_1, \ldots, w_m)$ for $W$. The **matrix of $T$** with respect to $\mathcal{B}$ and $\mathcal{C}$ is:
> $$
> [T]_\mathcal{B}^\mathcal{C} = [a_{ij}] \in M_{m \times n}(F)
> $$
> where $T(v_j) = \sum_{i=1}^m a_{ij} w_i$.

## Key Properties

Use fixed ordered bases in each space; sums and scalar multiples refer to maps with the same domain and codomain, and composition uses the same basis for the intermediate space.

1. $[T(v)]_\mathcal{C} = [T]_\mathcal{B}^\mathcal{C} [v]_\mathcal{B}$
2. $[S \circ T]_\mathcal{B}^\mathcal{D} = [S]_\mathcal{C}^\mathcal{D} [T]_\mathcal{B}^\mathcal{C}$
3. $[T + S] = [T] + [S]$
4. $[\alpha T] = \alpha [T]$
5. When $\dim V=\dim W$, $T$ is invertible iff its square matrix $[T]$ is invertible.

## Change of Basis

> [!info] Definition (Change of Basis Matrix)
> For ordered bases $\mathcal{B}=(v_1,\ldots,v_n)$ and $\mathcal{B}'=(v'_1,\ldots,v'_n)$ of $V$, define
> $$
> P=\begin{pmatrix}[v'_1]_\mathcal B&\cdots&[v'_n]_\mathcal B\end{pmatrix}.
> $$
> Thus its columns describe the **new basis in old coordinates**, and
> $$
> [v]_\mathcal B=P[v]_{\mathcal B'},\qquad
> [v]_{\mathcal B'}=P^{-1}[v]_\mathcal B.
> $$

Indeed, writing $v=\sum_j x'_jv'_j$ and taking old coordinates gives $[v]_\mathcal B=\sum_j x'_j[v'_j]_\mathcal B$. Since both coordinate maps are isomorphisms, $P$ is invertible. Specifying this direction is necessary before writing a similarity formula.

> [!abstract] Theorem (Similar Matrices)
> Let $T:V\to V$ be a linear operator. If $[T]_\mathcal{B} = A$ and $[T]_{\mathcal{B}'} = A'$, then:
> $$
> A' = P^{-1}AP.
> $$
> Matrices related this way are called **similar**.
>
> **Proof.** For every $v$, the old and new coordinates of $T(v)$ satisfy
> $$
> PA'[v]_{\mathcal B'}=[T(v)]_\mathcal B
> =A[v]_\mathcal B=AP[v]_{\mathcal B'}.
> $$
> Hence $PA'=AP$, and multiplying on the left by $P^{-1}$ gives the formula. $\square$

## Invariants Under Similarity

Similar matrices share:
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinant]]
- Trace
- Characteristic polynomial
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues]]
- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank]]
- Minimal polynomial

## Examples

> [!example] Example 1: Derivative operator
> $D: P_2 \to P_2$ with basis $\{1, x, x^2\}$:
> $$
> [D] = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 2 \\ 0 & 0 & 0 \end{pmatrix}
> $$

> [!example] Example 2: Rotation
> Rotation by $\theta$ in $\mathbb{R}^2$ (standard basis):
> $$
> [R_\theta] = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}
> $$

> [!example] Example 3: Change of basis
> Over $\mathbb R$, let $\mathcal B=(e_1,e_2)$ and $\mathcal B'=((1,1)^{\mathsf T},(1,-1)^{\mathsf T})$. The new basis vectors in old coordinates give
> $$
> P=\begin{pmatrix}1&1\\1&-1\end{pmatrix},\qquad
> P^{-1}=\frac12\begin{pmatrix}1&1\\1&-1\end{pmatrix}.
> $$
> For $v=(3,1)^{\mathsf T}$, old coordinates are $(3,1)^{\mathsf T}$ and new coordinates are $P^{-1}(3,1)^{\mathsf T}=(2,1)^{\mathsf T}$. Indeed, $v=2(1,1)^{\mathsf T}+(1,-1)^{\mathsf T}$.

## Canonical Forms

| Form | Condition | Use |
|------|-----------|-----|
| Diagonal | Diagonalizable | Simplest computation |
| Jordan | Any matrix over $\mathbb{C}$ | Classification |
| Rational canonical | Any matrix | Unique over any field |

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Infinite Matrices|Infinite Matrices]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Centralizers and Similarity|Matrix Centralizers and Similarity]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[01 - Group Theory/Concepts/Symmetric Groups#Permutation Matrices|Permutation Matrices]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory]] (group homomorphisms to $GL(V)$)

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

This note has a named source with printed-page and physical-PDF-page provenance, and the cited bounded slice was checked for the core definitions or results used here. Because the note may also contain independent exposition or claims beyond that slice, its overall status remains partially verified unless a claim-level audit is recorded.

The zero, identity, diagonal, and upper triangular definitions were checked on [S1, Ch. 1, §1.1, printed p. 6, PDF p. 18]. The matrix-unit and standard-vector definitions, expansions, and product rules were checked on [S1, Ch. 1, §1.1, (1.1.21)–(1.1.25), printed pp. 9–10, PDF pp. 21–22]. The three elementary types, their row effects, and the source proof of invertibility are in [S1, Ch. 1, §1.2, (1.2.3)–(1.2.5), Lemma 1.2.6, printed pp. 10–11, PDF pp. 22–23]. All these pages were rendered and visually inspected.

The scalar, lower triangular, strict triangular, and unitriangular terminology is explicitly defined here by its entry conditions. The entrywise basis verification, basis-vector multiplication proof, right-multiplication effects, and numerical examples are independent explanations for this vault.

The added Hermitian/orthogonal/unitary comparison summarizes the definitions checked in [S1, Ch. 8, §8.3, printed p. 233, PDF p. 245; Ch. 9, §9.1, printed pp. 261–262, PDF pp. 273–274]. Their linked concept sections contain the source locators, independent equivalence proofs, and examples.

The matrix representation and change-of-basis conventions were visually checked against [S1, Ch. 4, §4.2, Proposition 4.2.5, printed p. 105, PDF p. 117; (4.2.12) and Proposition 4.2.13, printed p. 106, PDF p. 118; §4.3, Proposition 4.3.5 and its proof, printed p. 109, PDF p. 121]. The earlier vault text had reversed the coordinate direction while retaining the other direction's similarity formula; the definition and example now consistently use the new-basis-in-old-coordinates convention. This was a vault inconsistency, not an error in Artin. The proof above is independently presented.
