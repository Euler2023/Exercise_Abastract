---
title: "Exercise LA184: Integer Orthogonal Matrices Are Signed Permutations"
topic: linear-algebra
difficulty: advanced
status: completed
tags:
  - exercise
  - linear-algebra
  - orthogonal-groups
  - integer-matrices
  - signed-permutations
source: Michael Artin, Algebra, 2nd ed., Ch. 5, Miscellaneous Problems, Ex. M.1, printed p. 152, PDF p. 164
created: 2026-08-24
---

# Exercise LA184: Integer Orthogonal Matrices Are Signed Permutations

## Problem Statement

> [!question] Miscellaneous Problem M.1
> Determine the group $O_n(\mathbb Z)$ of orthogonal matrices with integer entries.

## Hints

> [!hint]- Hint 1
> Write out entry $(j,k)$ of $A^{\mathsf T}A$. What do its diagonal and off-diagonal entries say about the columns of $A$?

> [!hint]- Hint 2
> If integers $a_1,\ldots,a_n$ satisfy $\sum_i a_i^2=1$, every summand is a nonnegative integer. How many summands can be nonzero?

> [!hint]- Hint 3
> If two columns are signed standard basis vectors with their nonzero entries in the same row, their inner product is $1$ or $-1$, not $0$.

> [!hint]- Hint 4
> Use the convention $P_\sigma e_j=e_{\sigma(j)}$. Left multiplication by a diagonal matrix assigns signs by **row**, whereas the sign of $Ae_j$ is initially indexed by **column**.

## Solution

> [!success]- Solution
> ### Proof 1: Column Inner Products
>
> ### 1. Read orthogonality through the columns
>
> Let $n\ge1$ and $A=(a_{ij})\in O_n(\mathbb Z)$. Write $c_j$ for column $j$. The $j$th row of $A^{\mathsf T}$ is $c_j^{\mathsf T}$, so
> $$
> c_j^{\mathsf T}c_k
> =(A^{\mathsf T}A)_{jk}
> =\sum_{i=1}^n a_{ij}a_{ik}
> =\delta_{jk}.
> $$
> Here $\delta_{jk}$ is $1$ for $j=k$ and $0$ otherwise; the last equality uses the [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups#Orthogonal Matrices|orthogonality condition]] $A^{\mathsf T}A=I_n$. Thus every column has squared length $1$, and different columns have inner product $0$.
>
> ### 2. Locate the nonzero entries
>
> For each $j$, the integers $a_{ij}$ satisfy $\sum_i a_{ij}^2=1$. Since their squares are nonnegative integers, exactly one entry is $1$ or $-1$ and all others are $0$. Hence
> $$
> c_j=\eta_j e_{\sigma(j)},\qquad \eta_j\in\{1,-1\}.
> $$
> If two different columns used the same row, their inner product would be $\eta_j\eta_k=\pm1$, contradicting orthogonality. Therefore $\sigma$ is injective on $\{1,\ldots,n\}$, hence a permutation. So $A$ has exactly one nonzero entry, equal to $\pm1$, in each row and column: it is a **signed permutation matrix**.
>
> ### 3. Factor, verify, and count
>
> Use the [[01 - Group Theory/Concepts/Symmetric Groups#Permutation Matrices|convention]] $P_\sigma e_j=e_{\sigma(j)}$. Set
> $$
> \varepsilon_i=\eta_{\sigma^{-1}(i)},\qquad
> D_\varepsilon=\operatorname{diag}(\varepsilon_1,\ldots,\varepsilon_n).
> $$
> These signs are indexed by rows. For every standard basis vector,
> $$
> D_\varepsilon P_\sigma e_j
> =\varepsilon_{\sigma(j)}e_{\sigma(j)}
> =\eta_j e_{\sigma(j)}
> =Ae_j.
> $$
> Thus $A=D_\varepsilon P_\sigma$. The nonzero position and value in each column determine $\sigma$ and $\varepsilon$ uniquely.
>
> Conversely, every such product has integer entries and satisfies
> $$
> (D_\varepsilon P_\sigma)^{\mathsf T}(D_\varepsilon P_\sigma)
> =P_\sigma^{\mathsf T}D_\varepsilon^2P_\sigma
> =P_\sigma^{\mathsf T}P_\sigma=I_n,
> $$
> since $D_\varepsilon^2=I_n$ and the columns of $P_\sigma$ are the standard basis vectors in some order. Therefore
> $$
> O_n(\mathbb Z)=
> \{D_\varepsilon P_\sigma:
> \varepsilon\in\{1,-1\}^n,\ \sigma\in S_n\},
> \qquad |O_n(\mathbb Z)|=2^n n!.
> $$
>
> ### 4. Identify the group structure
>
> Sign vectors form $(C_2)^n$ under componentwise multiplication, where $C_2=\{1,-1\}$. A permutation acts by moving their coordinates:
> $$
> (\sigma\cdot\zeta)_i=\zeta_{\sigma^{-1}(i)},\qquad
> P_\sigma D_\zeta P_\sigma^{-1}=D_{\sigma\cdot\zeta}.
> $$
> The conjugation identity follows by applying both sides to $e_i$. This action preserves componentwise products and respects permutation composition. Consequently,
> $$
> (D_\varepsilon P_\sigma)(D_\zeta P_\tau)
> =D_{\varepsilon(\sigma\cdot\zeta)}P_{\sigma\tau}.
> $$
> This is the semidirect-product multiplication
> $$
> (\varepsilon,\sigma)(\zeta,\tau)
> =(\varepsilon(\sigma\cdot\zeta),\sigma\tau).
> $$
> Unique factorization makes $(\varepsilon,\sigma)\mapsto D_\varepsilon P_\sigma$ bijective, and the product formula makes it a homomorphism. Hence
> $$
> O_n(\mathbb Z)\cong(C_2)^n\rtimes S_n,
> $$
> the **signed permutation group**, also called the **hyperoctahedral group**.

> [!success]- Solution
> ### Proof 2: Shortest Lattice Vectors
>
> Fix $n\ge1$ and $A\in O_n(\mathbb Z)$. Since $A^{-1}=A^{\mathsf T}$ also has integer entries, $A$ is a bijective isometry of the [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|integer lattice]] $\mathbb Z^n$.
>
> Its shortest nonzero vectors are precisely $\{\pm e_1,\ldots,\pm e_n\}$: for a nonzero integer vector, $\|z\|^2=\sum_i z_i^2\ge1$, with equality exactly when one coordinate is $\pm1$ and all others are $0$.
>
> Therefore $A$ permutes these shortest vectors. Linearity and invertibility force the images of different basis vectors onto different coordinate axes, so
> $$
> Ae_j=\eta_j e_{\sigma(j)},
> \qquad \eta_j\in\{1,-1\},\quad \sigma\in S_n.
> $$
> Thus $A$ is a signed permutation matrix. Conversely, every signed permutation matrix has integer entries and orthonormal columns, so it belongs to $O_n(\mathbb Z)$.
>
> The unique permutation and $n$ independent signs give $2^n n!$ elements. The multiplication computed in Proof 1 identifies this group with $(C_2)^n\rtimes S_n$.

## Supplementary Details

> [!info]- Why does a product entry equal a column inner product?
> The [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension#Standard Coordinate Basis|standard coordinate vector]] $e_j$ has a $1$ in position $j$ and zeros elsewhere. Thus
> $$
> (Ae_j)_i=\sum_{\ell=1}^n a_{i\ell}(e_j)_\ell=a_{ij},
> $$
> so $Ae_j=c_j$ is column $j$. For fixed $j,k$, the product-entry rule gives
> $$
> (A^{\mathsf T}A)_{jk}
> =\sum_{i=1}^n(A^{\mathsf T})_{ji}A_{ik}
> =\sum_{i=1}^n a_{ij}a_{ik}
> =c_j^{\mathsf T}c_k.
> $$
> Transposition gives $(A^{\mathsf T})_{ji}=a_{ij}$. The index $i$ runs through the rows, multiplying corresponding coordinates of columns $j$ and $k$. Finally, $A^{\mathsf T}A=I_n$ makes this entry $1$ when $j=k$ and $0$ otherwise.

> [!example]- A three-dimensional signed permutation
> Take $\sigma=(123)$ and row signs $\varepsilon=(-1,1,-1)$. Then
> $$
> A=D_\varepsilon P_\sigma
> =\begin{pmatrix}0&0&-1\\1&0&0\\0&-1&0\end{pmatrix},
> \qquad
> Ax=\begin{pmatrix}-x_3\\x_1\\-x_2\end{pmatrix}.
> $$
> Its columns are $e_2,-e_3,-e_1$, an orthonormal basis. Their signs are $\eta=(1,-1,-1)$, illustrating the conversion $\varepsilon_{\sigma(j)}=\eta_j$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups#Orthogonal Matrices|Orthogonal Matrices]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension#Standard Coordinate Basis|Standard Coordinate Basis]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation#Special Matrices|Diagonal and Identity Matrices]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces#Orthogonality|Orthogonality and Orthonormal Bases]]
- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]
- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]

## Notes

- **Source status:** The problem statement was checked against the rendered original page [S1, Michael Artin, *Algebra*, 2nd ed., Ch. 5, Miscellaneous Problems, Ex. M.1, printed p. 152, PDF p. 164]. The source poses the exercise; the classification, uniqueness, counting, example, and explicit semidirect-product argument above are independent derivations for this vault.
- **Prerequisites and notation:** The proof uses ordinary real column inner products, the standard coordinate basis, and the convention $P_\sigma e_j=e_{\sigma(j)}$. Their definitions are linked above. The semidirect-product multiplication is defined and verified within the solution rather than used as an unproved structural theorem.
- **Second proof:** The shortest-lattice-vector argument is an independent geometric derivation. It uses preservation of the integer lattice and Euclidean lengths; it does not use path connectedness.
- **Method boundary:** The sum-of-squares argument uses both integrality and the positive-definite Euclidean form. For real entries, unit columns may have several nonzero coordinates: for example, a plane rotation through $\pi/4$ is orthogonal but is not a signed permutation matrix. The argument does not classify integral isometries of an indefinite form.
