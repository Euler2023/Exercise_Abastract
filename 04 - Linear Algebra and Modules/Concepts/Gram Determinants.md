---
title: Gram Determinants
aliases:
  - Gram determinant
  - Gram matrix
  - Gram matrices
  - Gramian
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
created: 2026-11-27
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, §§8.3–8.4, printed pp. 232–234, 241, 255, PDF pp. 244–246, 253, 267; Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §4 and Ch. III, §4, printed pp. 26, 228, PDF pp. 45, 247; Brian C. Hall, Lie Groups, Lie Algebras, and Representations, 2nd ed., Ch. 8, §8.8, printed p. 227, PDF p. 234"
source_status: partially-verified
status: not-started
---

# Gram Determinants

## Definition

> [!info] Gram matrix and Gram determinant
> Let $v_1,\ldots,v_k$ be a finite list in a real or complex inner product space. In the complex case, take the inner product to be conjugate-linear in the first variable and linear in the second. The **Gram matrix** and **Gram determinant** are
>
> $$
> G(v_1,\ldots,v_k)=\bigl(\langle v_i,v_j\rangle\bigr)_{i,j=1}^k,
> \qquad
> \Delta(v_1,\ldots,v_k)=\det G(v_1,\ldots,v_k).
> $$
>
> In orthonormal coordinates on a finite-dimensional subspace containing the list, let $A$ have columns $v_1,\ldots,v_k$. Then $G=A^*A$, where $A^*$ is the conjugate transpose. Over $\mathbb R$, $A^*=A^{\mathsf T}$. Set $\Delta()=1$ for the empty list.

With the first-variable-linear convention used in [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]], the same entry order gives $G^{\mathsf T}$ and leaves $\Delta$ unchanged.

## Intuition

The diagonal entries record squared lengths. For two nonzero real vectors, the off-diagonal entry is the product of their lengths and the cosine of their angle. In a real inner product space, $\sqrt{\Delta}$ is the volume of the parallelepiped spanned by the list. For $k=2$ the determinant is $\|v_1\|^2\|v_2\|^2-|\langle v_1,v_2\rangle|^2$. Its square root is the area in the real case, and its nonnegativity gives Cauchy–Schwarz in both cases.

## Key Properties

### Positivity, rank, and change of list

The matrix $G=A^*A$ is Hermitian and satisfies $c^*Gc=\|Ac\|^2$ for every coefficient vector $c$. Thus $G$ is positive semidefinite. If $Ac=0$ then $Gc=0$, and if $Gc=0$ then the same norm identity gives $Ac=0$. It follows that $\ker G=\ker A$, so $G$ is positive definite exactly when the list is linearly independent. The determinant vanishes exactly when the list is dependent.

If $w_j=\sum_i v_i C_{ij}$ for a square coefficient matrix $C$, the new column matrix is $AC$. Therefore

$$
G(w_1,\ldots,w_k)=C^*G(v_1,\ldots,v_k)C,
\qquad
\Delta(w_1,\ldots,w_k)=|\det C|^2\Delta(v_1,\ldots,v_k).
$$

### Orthogonalization, volume, and distance

For each $j$, put $W_{j-1}=\operatorname{span}(v_1,\ldots,v_{j-1})$ and let $r_j=v_j-\operatorname{proj}_{W_{j-1}}v_j$. Each $r_j$ is orthogonal to all earlier residuals. Subtracting the earlier linear combination from each $v_j$ amounts to a change of list by a unit upper triangular matrix, even when a residual is zero. Its determinant is $1$, and the new Gram matrix is diagonal. Hence

$$
\Delta(v_1,\ldots,v_k)=\prod_{j=1}^k\|r_j\|^2.
$$

This proves $\Delta\ge0$. Since $\|r_j\|\le\|v_j\|$ by orthogonal projection, it also gives Hadamard's inequality $\Delta\le\prod_j\|v_j\|^2$. For nonzero $v_j$, equality holds exactly when every $v_j$ is orthogonal to the preceding span. A zero $v_j$ gives equality with both sides zero.

For an independent real list, its coordinate matrix $R$ in an orthonormal basis of its span is square. In those coordinates the parallelepiped has $k$-dimensional volume $|\det R|$, and $\det(R^{\mathsf T}R)=|\det R|^2$. For a dependent real list the span has dimension less than $k$, so its $k$-volume and Gram determinant both vanish. If the independent list is a lattice basis, $\sqrt{\Delta}$ is the covolume in its real span.

If $v_1,\ldots,v_k$ are independent and $W$ is their span, appending any vector $x$ adds the factor $\|x-\operatorname{proj}_W x\|^2$ to the product. Consequently

$$
\operatorname{dist}(x,W)^2
=\frac{\Delta(v_1,\ldots,v_k,x)}{\Delta(v_1,\ldots,v_k)}.
$$

### Sum of squared minors

If $A$ has $n$ rows and $k\le n$ columns, let $A_I$ be the square submatrix on the rows in a $k$-element set $I$, taken in increasing order. The Cauchy–Binet identity for $A^*A$ gives

$$
\Delta=\sum_{\substack{I\subseteq\{1,\ldots,n\}\\ |I|=k}}|\det A_I|^2.
$$

To see the identity here, expand each column of $A^*A$ as a linear combination of columns of $A^*$ and use multilinearity of the determinant. Terms with any repeated column index vanish. For a fixed set $I$, the signed sum of coefficients over the orderings of its indices is $\det A_I$. The determinant of the corresponding ordered columns of $A^*$ is $\overline{\det A_I}$. If $k>n$, the columns are dependent and the sum over row sets is empty.

### Exterior-power norm

The induced inner product on an exterior power makes the increasing wedges of an orthonormal basis orthonormal. In orthonormal coordinates, multilinearity and alternation give $\det A_I$ as the coefficient of the basis wedge indexed by $I$ in $v_1\wedge\cdots\wedge v_k$. The sum of squared minors therefore gives

$$
\|v_1\wedge\cdots\wedge v_k\|^2=\Delta(v_1,\ldots,v_k).
$$

## Examples

> [!example] Area, covolume, and distance in $\mathbb R^3$
> Take $v_1=(1,1,0)$ and $v_2=(0,1,1)$. Their Gram matrix is $\begin{pmatrix}2&1\\1&2\end{pmatrix}$ with determinant $3$. The area of their parallelogram and the covolume of $\mathbb Z v_1+\mathbb Z v_2$ in its plane are both $\sqrt{3}$. The three two-row minors of the column matrix are all $1$, also giving $\Delta=3$.
>
> For $x=(0,0,1)$ the augmented Gram matrix is $\begin{pmatrix}2&1&0\\1&2&1\\0&1&1\end{pmatrix}$ with determinant $1$. Thus the distance from $x$ to the plane is $1/\sqrt{3}$.

> [!example] An isotropic vector for an indefinite form
> For the symmetric bilinear form $B(u,v)=u_1v_1-u_2v_2$ on $\mathbb R^2$, the single nonzero vector $v=(1,1)$ has $B(v,v)=0$. Its Gram matrix is $(0)$ even though the singleton list is linearly independent. The independence criterion above uses a positive-definite inner product.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Independence|Linear Independence]]
- [[04 - Linear Algebra and Modules/Concepts/Exterior Algebra|Exterior Algebra]]
- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]
- [[04 - Linear Algebra and Modules/Concepts/Metrized Modules and Determinant Metrics|Metrized Modules and Determinant Metrics]]

## Exercises

```dataview
TABLE status, difficulty, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
SORT file.name ASC
```

## Source and Proof Status

- **Artin** gives the conjugate-linear-first convention, the matrix of a Hermitian form in a basis, and the congruence law $P^*AP$. He also gives the Gram–Schmidt residual for an independent list. [S1, Ch. 8, §8.3, (8.3.3), Prop. 8.3.8, (8.3.9) and Cor. 8.3.10, printed pp. 232–234, PDF pp. 244–246; §8.4, printed p. 241, PDF p. 253]
- **Neukirch** derives the determinant formula for parallelepiped volume for an independent list spanning a real Euclidean space, and uses it for full lattice covolume. In a later section he defines the exterior-power metric by the determinant of the pairings. His complex inner product is linear in the first variable, which gives the same determinant for a self-pairing. [S4, Ch. I, §4, printed p. 26, PDF p. 45; Ch. III, §4, printed p. 228, PDF p. 247]
- **Hall** names the Gram matrix of a real basis and uses strict Cauchy–Schwarz for positivity of its determinant in rank two. [S10, Ch. 8, §8.8, proof of Lemma 8.41, (8.10), printed p. 227, PDF p. 234]
- **Independent derivations in this note** include the Gram–Schmidt product, the distance ratio, and the Cauchy–Binet expansion. The worked example uses the same spanning pair as Artin's projection exercise, where the vector to project is $(1,0,0)$. [S1, Ch. 8, §8.4, Ex. 4.15, printed p. 255, PDF p. 267]
