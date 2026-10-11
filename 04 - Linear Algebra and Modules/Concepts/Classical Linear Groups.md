---
title: Classical Linear Groups
aliases:
  - Classical Matrix Groups
  - 经典线性群
  - Orthogonal Matrix
  - Orthogonal Matrices
  - 正交矩阵
  - Unitary Matrix
  - Unitary Matrices
  - 酉矩阵
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
  - matrix-groups
  - classical-groups
created: 2026-08-10
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 1, printed pp. 261–262, PDF pp. 273–274"
source_status: verified
status: not-started
---

# Classical Linear Groups

## Definition

Let $F$ be a field. The **general linear group** is
$$
GL_n(F)=\{P\in M_n(F):\det P\ne0\}.
$$
A **linear group** or **matrix group** is a subgroup of some $GL_n(F)$.

Artin calls the following families the **classical linear groups**:

| Group | Defining equation | Preserved object |
|---|---|---|
| $SL_n(\mathbb R)$ | $\det P=1$ | volume and orientation |
| $O_n$ | $P^{\mathsf T}P=I$ | Euclidean dot product |
| $SO_n$ | $P^{\mathsf T}P=I$, $\det P=1$ | dot product and orientation |
| $U_n$ | $P^*P=I$ | standard Hermitian product |
| $SU_n$ | $P^*P=I$, $\det P=1$ | Hermitian product and complex volume |
| $SP_{2n}(\mathbb R)$ | $P^{\mathsf T}JP=J$ | standard symplectic form |
| $O_{p,q}$ | $P^{\mathsf T}I_{p,q}P=I_{p,q}$ | a form of signature $(p,q)$ |

Here
$$
J=\begin{pmatrix}0&I_n\\-I_n&0\end{pmatrix},
\qquad
I_{p,q}=\operatorname{diag}(I_p,-I_q).
$$

## Orthogonal Matrices

> [!info] Orthogonal matrix
> Let $n\ge1$. A real square matrix $Q\in M_n(\mathbb R)$ is **orthogonal** if
> $$
> Q^{\mathsf T}Q=I_n.
> $$
> Here $Q^{\mathsf T}$ is the [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms#Transpose and Conjugate Transpose|transpose]], and $I_n$ is the identity matrix. Equivalently, $Q$ is invertible and $Q^{-1}=Q^{\mathsf T}$.

The equivalence follows from the [[04 - Linear Algebra and Modules/Concepts/Determinants|determinant identities]] for products and transpose:

$$
1=\det(Q^{\mathsf T}Q)=(\det Q)^2.
$$

Thus $Q$ is invertible, and multiplying $Q^{\mathsf T}Q=I_n$ on the right by $Q^{-1}$ gives $Q^{\mathsf T}=Q^{-1}$. It also follows that $QQ^{\mathsf T}=I_n$. Conversely, the inverse-transpose identity implies the defining equation.

### Orthonormal Columns and Rows

Write $q_j=Qe_j$ for column $j$, using the [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension#Standard Coordinate Basis|standard coordinate basis]]. Matrix multiplication gives

$$
(Q^{\mathsf T}Q)_{jk}=q_j^{\mathsf T}q_k.
$$

Consequently, orthogonality is equivalent to

$$
q_j^{\mathsf T}q_k=\delta_{jk}.
$$

Each column has length $1$, and distinct columns have inner product $0$. The columns therefore form an **orthonormal basis** of $\mathbb R^n$: if $\sum_j c_jq_j=0$, taking its inner product with $q_k$ gives $c_k=0$, and $n$ independent vectors in $\mathbb R^n$ form a basis. See [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces#Orthogonality|orthogonality and orthonormal bases]].

The equation $QQ^{\mathsf T}=I_n$ gives the corresponding statement for rows. Conversely, orthonormal rows imply $QQ^{\mathsf T}=I_n$, which forces invertibility by the same determinant argument and hence $Q^{\mathsf T}Q=I_n$. Merely requiring distinct rows or columns to be perpendicular is insufficient: their lengths must also be $1$. These equivalences require a square matrix; a rectangular matrix with $Q^{\mathsf T}Q=I$ need not have orthonormal rows.

### Preservation of Inner Products and Lengths

For all $x,y\in\mathbb R^n$,

$$
(Qx)^{\mathsf T}(Qy)=x^{\mathsf T}Q^{\mathsf T}Qy.
$$

Thus an orthogonal matrix preserves the ordinary Euclidean inner product. Conversely, if this expression equals $x^{\mathsf T}y$ for every $x,y$, taking $x=e_j$ and $y=e_k$ recovers every entry of $Q^{\mathsf T}Q=I_n$.

Preserving inner products implies preserving lengths by taking $x=y$. The converse follows from the real polarization identity

$$
2x^{\mathsf T}y=\|x+y\|^2-\|x\|^2-\|y\|^2.
$$

Since $Q(x+y)=Qx+Qy$, preservation of lengths makes the right-hand side unchanged. Geometrically, orthogonal transformations preserve lengths and angles between nonzero vectors.

### Orthogonal Groups and Examples

The **orthogonal group** is the collection of orthogonal matrices:

$$
O_n(\mathbb R)=\{Q\in M_n(\mathbb R):Q^{\mathsf T}Q=I_n\}.
$$

It contains $I_n$ and is closed under products, since

$$
(QR)^{\mathsf T}(QR)=R^{\mathsf T}(Q^{\mathsf T}Q)R=I_n
$$

for orthogonal $Q,R$. The inverse $Q^{-1}=Q^{\mathsf T}$ is orthogonal because $QQ^{\mathsf T}=I_n$. The determinant calculation above gives $\det Q=\pm1$, and $SO_n(\mathbb R)$ is the subgroup with determinant $1$. The determinant condition alone does not imply orthogonality: $\operatorname{diag}(2,1/2)$ has determinant $1$ but its transpose-times-itself is $\operatorname{diag}(4,1/4)$.

> [!example] Permutation matrices and signed permutations
> The columns of a [[01 - Group Theory/Concepts/Symmetric Groups#Permutation Matrices|permutation matrix]] $P$ are the standard basis vectors in some order, so $P^{\mathsf T}P=I_n$. Every permutation matrix is therefore orthogonal over $\mathbb R$; [[01 - Group Theory/Exercises/Exercise G30 - Inverse of a Permutation Matrix|Exercise G30]] proves $P^{-1}=P^{\mathsf T}$.
>
> If $D=\operatorname{diag}(\varepsilon_1,\ldots,\varepsilon_n)$ with $\varepsilon_i\in\{1,-1\}$, then
> $$
> (DP)^{\mathsf T}(DP)=P^{\mathsf T}D^{\mathsf T}DP=P^{\mathsf T}P=I_n.
> $$
> Hence signed permutation matrices are orthogonal too. [[04 - Linear Algebra and Modules/Exercises/Exercise LA184 - Integer Orthogonal Matrices Are Signed Permutations|Exercise LA184]] proves that they are exactly the orthogonal matrices whose entries are integers. Without the integer restriction, there are many more orthogonal matrices; for instance
> $$
> \frac1{\sqrt2}\begin{pmatrix}1&-1\\1&1\end{pmatrix}
> $$
> is orthogonal and is not a signed permutation matrix.

> [!warning] Orthogonal does not mean symmetric
> Orthogonality requires $Q^{\mathsf T}=Q^{-1}$; symmetry requires $Q^{\mathsf T}=Q$. For example,
> $$
> R=\begin{pmatrix}0&-1\\1&0\end{pmatrix}
> $$
> is orthogonal, but $R^{\mathsf T}\ne R$. Conversely, $2I_n$ is symmetric but is not orthogonal, since $(2I_n)^{\mathsf T}(2I_n)=4I_n$.

## Unitary Matrices

> [!info] Unitary matrix
> Let $n\ge1$. A complex square matrix $U\in M_n(\mathbb C)$ is **unitary** if
> $$
> U^*U=I_n,
> $$
> where $U^*=\overline U^{\mathsf T}$ is the [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms#Transpose and Conjugate Transpose|conjugate transpose]]. Equivalently, $U$ is invertible and $U^{-1}=U^*$.

Indeed, $\det(U^*U)=\overline{\det U}\det U=|\det U|^2=1$ forces invertibility; multiplication by $U^{-1}$ then gives $U^*=U^{-1}$ and $UU^*=I_n$. The reverse implication follows by multiplication.

For columns $u_j$, the entry identity $(U^*U)_{jk}=u_j^*u_k$ shows that unitarity is equivalent to having an orthonormal column basis for the standard Hermitian product $x^*y$. It is also equivalent to preserving this product:

$$
(Ux)^*(Uy)=x^*U^*Uy=x^*y.
$$

Conversely, preservation for all $x,y$ gives $U^*U=I_n$ by taking standard basis vectors. Over the real numbers, conjugate transpose equals transpose, so a real matrix is unitary exactly when it is orthogonal.

A [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms#Hermitian Matrices|Hermitian matrix]] instead satisfies $H^*=H$. This is a different condition: $\operatorname{diag}(2,3)$ is Hermitian but not unitary, whereas $\operatorname{diag}(i,1)$ is unitary but not Hermitian.

## Real and Complex Versions

Unless explicitly stated otherwise, Artin uses $GL_n$, $SL_n$, $O_n$, and $SP_{2n}$ for the **real** groups in Chapter 9. Their complex analogues are defined by the same polynomial equations over $\mathbb C$.

The complex orthogonal group and the unitary group must not be confused:
$$
O_n(\mathbb C):P^{\mathsf T}P=I,
\qquad
U_n:P^*P=I.
$$
Complex transpose does not conjugate entries, whereas conjugate transpose does.

For example, $\operatorname{diag}(i,1)$ belongs to $U_2$ but not to $O_2(\mathbb C)$, since its transpose-times-itself is $\operatorname{diag}(-1,1)$. The complex orthogonal equation preserves the complex bilinear form $x^{\mathsf T}y$; it does not imply preservation of the usual Hermitian product or its positive-definite length.

## Realification of Complex Matrices

Writing $A=B+iC$ with real $B,C$, define
$$
\rho(A)=
\begin{pmatrix}
B&-C\\
C&B
\end{pmatrix}.
$$
Then
$$
\rho(A_1A_2)=\rho(A_1)\rho(A_2),
\qquad
\rho(I)=I,
$$
and $\rho(A)=0$ only when $A=0$. Hence $\rho$ embeds $GL_n(\mathbb C)$ into $GL_{2n}(\mathbb R)$. This is the matrix form of regarding $\mathbb C^n$ as a $2n$-dimensional real vector space.

## Key Properties

1. Each defining equation is preserved by products and inverses, so it defines a group.
2. Orthogonal and unitary matrices have columns forming orthonormal bases for the corresponding products.
3. Lorentz and symplectic matrices have analogous column relations for indefinite or skew-symmetric forms.
4. The topology inherited from the ambient matrix space distinguishes compact, connected, and disconnected classical groups.
5. Every real symplectic matrix has determinant $1$; the equation alone first gives only $(\det P)^2=1$, and connectedness eliminates the negative sign.

## Examples

> [!example] The Circle Group
> The real group $SO_2$ consists of
> $$
> \begin{pmatrix}
> \cos\theta&-\sin\theta\\
> \sin\theta&\cos\theta
> \end{pmatrix},
> $$
> so $SO_2$ is isomorphic and homeomorphic to the unit circle.

> [!example] A Lorentz Boost
> For every $t\in\mathbb R$,
> $$
> \begin{pmatrix}
> \cosh t&0&0&\sinh t\\
> 0&1&0&0\\
> 0&0&1&0\\
> \sinh t&0&0&\cosh t
> \end{pmatrix}\in O_{3,1}.
> $$
> Its entries become arbitrarily large, so $O_{3,1}$ is not bounded.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[04 - Linear Algebra and Modules/Concepts/Symplectic Groups|Symplectic Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Indefinite Bilinear Forms and Lorentz Groups|Indefinite Bilinear Forms and Lorentz Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms#Hermitian Matrices|Hermitian Matrices]]
- [[01 - Group Theory/Concepts/Symmetric Groups#Permutation Matrices|Permutation Matrices]]
- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

- The definitions and Artin's real-group convention are **stated in the source**. [S1, Ch. 9, §9.1, formulas (9.1.1)–(9.1.5), printed pp. 261–262, PDF pp. 273–274] The original page images were checked on 2026-10-01 for the added orthogonal and unitary matrix definitions and their real/complex distinction.
- The equivalence proofs, group-closure calculations, and distinguishing examples in the added sections are **independent derivations**. The determinant identities and finite-dimensional basis criterion are imported from the linked prerequisite notes. The realification calculation and other examples above are also independently derived.
