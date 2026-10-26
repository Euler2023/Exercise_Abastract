---
title: "Exercise LA590: Stabilizer of a Block-Diagonal Group"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-groups
source: "Adapted from Andrew Graham, On the p-adic interpolation of unitary Friedberg–Jacquet periods, Algebra & Number Theory 18(6), 2024, Lemma 2.4.3(1), the GL_n x GL_n component of the stabilizer calculation, printed p. 1129, PDF p. 14"
paper_refs:
  - "paper/graham-2024/lemma-2.4.3-1"
created: 2026-10-26
---

# Exercise LA590: Stabilizer of a Block-Diagonal Group

## Problem Statement

> [!question] Adapted exercise
> Let $k$ be any field and $n\ge1$. Let $J=J_n$ be the $n\times n$ antidiagonal matrix with all antidiagonal entries equal to $1$. Put
> $$
> G=\operatorname{GL}_{2n}(k),\qquad
> H=\{\operatorname{diag}(A,D):A,D\in\operatorname{GL}_n(k)\},\qquad
> u=\begin{pmatrix}I_n&0\\J&I_n\end{pmatrix}.
> $$
> Let $B\subset G$ be the subgroup of invertible upper triangular matrices. The group $H$ acts by left multiplication on the set $G/B$ of right cosets.
>
> **(a)** Calculate $u^{-1}$ and $u^{-1}\operatorname{diag}(A,D)u$. Express membership in $H\cap uBu^{-1}$ as conditions on $A,D$.
>
> **(b)** Prove, entry by entry, that
> $$
> H\cap uBu^{-1}
> =\{\operatorname{diag}(y_1,\ldots,y_n,y_n,\ldots,y_1):y_i\in k^\times\}.
> $$
> Identify this subgroup with the stabilizer of $uB$, and construct an explicit isomorphism with $(k^\times)^n$.
>
> **(c)** When $k=\mathbb F_q$, find the cardinality of the orbit $H\cdot uB$. Evaluate it for $n=2$, $q=3$.
>
> **(d)** For $n=2$, check directly that $\operatorname{diag}(a,b,b,a)$ stabilizes $uB$ for all $a,b\in k^\times$. Give an invertible block diagonal matrix that does not stabilize $uB$.

## Hints

> [!hint]- Hint 1
> The inverse of $u$ changes $J$ to $-J$. A block below the main diagonal of a $2n\times2n$ upper triangular matrix must be zero.

> [!hint]- Hint 2
> The conjugate has lower left block $DJ-JA$. Thus $D=JAJ$. Its entries satisfy $(JAJ)_{ij}=A_{n+1-i,n+1-j}$, so conjugation by $J$ reverses upper and lower triangularity. For the finite orbit, count ordered bases and apply the orbit-stabilizer theorem.

## Solution

> [!success]- Solution
> **Proof scope:** Independent matrix derivation of one general linear group component of Graham's stabilizer calculation. Parts (c) and (d) are added applications.
>
> **(a) Conjugation and triangularity.** Multiplication gives
> $$
> u^{-1}=\begin{pmatrix}I_n&0\\-J&I_n\end{pmatrix},\qquad
> u^{-1}\begin{pmatrix}A&0\\0&D\end{pmatrix}u
> =\begin{pmatrix}A&0\\DJ-JA&D\end{pmatrix}.
> $$
> This matrix is upper triangular exactly when $A$ and $D$ are upper triangular and $DJ-JA=0$. Since $J^2=I_n$, the last equation is equivalent to $D=JAJ$. These conditions are both necessary and sufficient. All the matrices considered are already invertible because $A,D\in\operatorname{GL}_n(k)$.
>
> **(b) Entry calculation and the stabilizer.** By the definition of $J$,
> $$
> (JAJ)_{ij}=\sum_{r,s=1}^n J_{ir}A_{rs}J_{sj}
> =A_{n+1-i,n+1-j}.
> $$
> Suppose $A,D$ satisfy part (a). For indices $r<s$, set $i=n+1-r$ and $j=n+1-s$. Then $i>j$, so upper triangularity of $D=JAJ$ yields
> $$
> 0=D_{ij}=A_{rs}.
> $$
> Every entry of $A$ above its diagonal is zero. Its entries below the diagonal are zero by upper triangularity, so $A=\operatorname{diag}(y_1,\ldots,y_n)$. Invertibility forces every $y_i$ to be nonzero. It follows that
> $$
> D=JAJ=\operatorname{diag}(y_n,\ldots,y_1).
> $$
> Conversely, these diagonal matrices satisfy $DJ=JA$, so the conjugate in part (a) is upper triangular. This proves the displayed equality of subgroups.
>
> For $h\in H$,
> $$
> h\cdot uB=uB
> \quad\Longleftrightarrow\quad
> u^{-1}hu\in B
> \quad\Longleftrightarrow\quad
> h\in H\cap uBu^{-1}.
> $$
> Thus this intersection is exactly the stabilizer. The map
> $$
> (k^\times)^n\longrightarrow H\cap uBu^{-1},\qquad
> (y_1,\ldots,y_n)\longmapsto
> \operatorname{diag}(y_1,\ldots,y_n,y_n,\ldots,y_1)
> $$
> is a homomorphism because diagonal multiplication is coordinatewise. It is surjective by the calculation above and injective because the first $n$ diagonal entries recover its argument. This gives the required isomorphism, including the case $n=1$.
>
> **(c) Finite orbit.** The number of ordered bases of $\mathbb F_q^n$ is
> $$
> |\operatorname{GL}_n(\mathbb F_q)|
> =\prod_{i=0}^{n-1}(q^n-q^i).
> $$
> Indeed, after $i$ linearly independent columns have been chosen, their span has $q^i$ elements, leaving $q^n-q^i$ choices for the next column. Therefore $|H|=|\operatorname{GL}_n(\mathbb F_q)|^2$, while the stabilizer in part (b) has $(q-1)^n$ elements. The finite orbit-stabilizer theorem gives
> $$
> |H\cdot uB|
> =\frac{\left(\prod_{i=0}^{n-1}(q^n-q^i)\right)^2}{(q-1)^n}.
> $$
> For $n=2$, $q=3$, this is $48^2/4=576$.
>
> **(d) A check and a nonexample.** For $n=2$,
> $$
> J=\begin{pmatrix}0&1\\1&0\end{pmatrix},\quad
> A=\begin{pmatrix}a&0\\0&b\end{pmatrix},\quad
> D=\begin{pmatrix}b&0\\0&a\end{pmatrix},\quad
> DJ=JA=\begin{pmatrix}0&b\\a&0\end{pmatrix}.
> $$
> Hence the conjugate is $\operatorname{diag}(A,D)$ itself, an upper triangular matrix, so it fixes $uB$.
>
> In contrast, take
> $$
> A_0=\begin{pmatrix}1&1\\0&1\end{pmatrix},\qquad D_0=I_2.
> $$
> Both blocks are invertible, but
> $$
> D_0J-JA_0
> =\begin{pmatrix}0&0\\0&-1\end{pmatrix}\ne0.
> $$
> Thus $\operatorname{diag}(A_0,D_0)$ does not stabilize $uB$. This works in every characteristic, since $-1\ne0$ in a field.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Permutation Matrices]]

## Notes

- **Source anchor:** [Andrew Graham, Lemma 2.4.3(1) and its proof, printed p. 1129, PDF p. 14]. The page was rendered at 200 dpi and visually checked. The journal identifies the article as *Algebra & Number Theory* 18(6) (2024), DOI [10.2140/ant.2024.18.1117](https://doi.org/10.2140/ant.2024.18.1117); the local filename's year 2026 is not its publication year.
- **Adaptation boundary:** The source has a product of general linear groups indexed by embeddings, with an additional distinguished component. This exercise isolates the $\operatorname{GL}_n\times\operatorname{GL}_n$ component and derives its stabilizer. It does not prove the full product-group lemma or its second part, and it does not require Shimura varieties or $p$-adic interpolation.
- **External input:** Part (c) uses the finite orbit-stabilizer theorem. No algebraic-group orbit dimension theorem is needed for any part of the exercise. The source uses such dimension arguments to pass from stabilizers to Zariski-open orbits; that geometric conclusion is outside this exercise's assigned scope.
- **Finite verification actually run:** For $n=2$ over $\mathbb F_3$, enumeration of all $48^2=2304$ pairs $(A,D)\in\operatorname{GL}_2(\mathbb F_3)^2$ found exactly four satisfying the triangularity and $DJ=JA$ conditions. This agrees with the stabilizer $(\mathbb F_3^\times)^2$ and the orbit cardinality $576$. The general stabilizer statement is proved above without relying on enumeration.
- **Routing:** The essential argument is block multiplication and the reversal of triangularity by an antidiagonal matrix. Its primary toolkit is linear algebra, with group actions supplying the interpretation and finite count.
