---
title: Bilinear and Hermitian Forms
aliases:
  - Real Bilinear Forms
  - Hermitian Forms
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
  - bilinear-forms
  - hermitian-forms
created: 2026-08-24
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, §§8.1–8.3, printed pp. 229–234, PDF pp. 241–246"
source_status: verified
status: not-started
---

# Bilinear and Hermitian Forms

## Definition

> [!info] Real bilinear form
> A **real bilinear form** on a real vector space $V$ is a map
>
> $$
> B:V\times V\longrightarrow\mathbb R
> $$
>
> that is linear in each variable. Relative to a basis $(v_1,\ldots,v_n)$, its matrix is $A=(a_{ij})$ with $a_{ij}=B(v_i,v_j)$, and
>
> $$
> B(v,w)=X^{\mathsf T}AY
> $$
>
> for the coordinate columns $X,Y$ of $v,w$.

> [!info] Hermitian form
> A **Hermitian form** on a complex vector space $V$ is conjugate-linear in the first variable, linear in the second, and satisfies
>
> $$
> H(w,v)=\overline{H(v,w)}.
> $$
>
> Its matrix $A$ satisfies $A^*=A$, and in coordinates $H(v,w)=X^*AY$.

## Symmetric and Skew-Symmetric Parts

Every real bilinear form decomposes uniquely as

$$
B=S+K,
\qquad
S(v,w)=\frac{B(v,w)+B(w,v)}2,
\qquad
K(v,w)=\frac{B(v,w)-B(w,v)}2.
$$

Here $S$ is symmetric and $K$ is skew-symmetric. In matrix language this is

$$
A=\frac{A+A^{\mathsf T}}2+\frac{A-A^{\mathsf T}}2.
$$

Thus symmetric and skew-symmetric matrices are complementary real subspaces of $M_n(\mathbb R)$.

## Change of Basis

If the coordinate columns are related by $X=PX'$, then the matrix of a bilinear or Hermitian form changes by **congruence**:

$$
A'=P^{\mathsf T}AP
\quad\text{over }\mathbb R,
\qquad
A'=P^*AP
\quad\text{over }\mathbb C.
$$

Congruence is different from similarity. It preserves rank and nondegeneracy; over $\mathbb R$, congruence of symmetric forms also preserves inertia.

## Positive Definiteness

A real symmetric form is positive definite if $B(v,v)>0$ for every $v\ne0$. A Hermitian form is positive definite if $H(v,v)>0$ for every $v\ne0$. In coordinates these conditions become

$$
X^{\mathsf T}AX>0
\quad\text{or}\quad
X^*AX>0
$$

for every nonzero coordinate column $X$.

For a Hermitian form $H=R+iI$, restriction of scalars from $\mathbb C$ to $\mathbb R$ makes $R$ a symmetric real bilinear form and $I$ a skew-symmetric real bilinear form. If $H$ is positive definite, then $R$ is positive definite.

## Key Properties

1. A matrix $A$ is Hermitian if and only if $X^*AX$ is real for every $X$.
2. Every Hermitian matrix has real diagonal entries and conjugate off-diagonal entries.
3. The Hermitian $n\times n$ matrices form a real vector space of dimension $n^2$.
4. If $A$ is invertible, then $A^*A$ is positive definite Hermitian.
5. Sums and inverses of positive definite Hermitian matrices remain positive definite Hermitian, but a product $AB$ need not be Hermitian unless $A$ and $B$ commute.

## Examples

> [!example] Standard products
> The dot product $X^{\mathsf T}Y$ on $\mathbb R^n$ is a positive definite symmetric form. The standard product $X^*Y$ on $\mathbb C^n$ is a positive definite Hermitian form.

> [!example] A non-Hermitian product
> The matrices
>
> $$
> A=\begin{pmatrix}1&0\\0&2\end{pmatrix},
> \qquad
> B=\begin{pmatrix}2&1\\1&2\end{pmatrix}
> $$
>
> are positive definite Hermitian, while $AB=\begin{pmatrix}2&1\\2&4\end{pmatrix}$ is not Hermitian.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Skew-Symmetric Bilinear Forms|Skew-Symmetric Bilinear Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]

## Exercises

- [[04 - Linear Algebra and Modules/Exercises/Exercise LA201 - Symmetric and Skew Decomposition|Exercise LA201]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA202 - Maximal Entries of a Positive Definite Matrix|Exercise LA202]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA203 - Rank under Congruence|Exercise LA203]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA204 - Reality Criterion for Hermitian Matrices|Exercise LA204]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA205 - Real and Imaginary Parts of a Hermitian Form|Exercise LA205]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA206 - A Basis for Hermitian Matrices|Exercise LA206]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA207 - Positivity of the Gram Matrix A Star A|Exercise LA207]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA208 - Operations on Positive Definite Hermitian Matrices|Exercise LA208]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA209 - Eigenvalues of a Two by Two Hermitian Matrix|Exercise LA209]]

## Source and Proof Status

- The definitions, coordinate matrices, change-of-basis laws, and positivity conventions are stated and developed in [S1, Ch. 8, §§8.1–8.3, printed pp. 229–234, PDF pp. 241–246].
- The decomposition formulas and the listed matrix consequences are elementary derivations from those definitions. Their applications are proved independently in Exercises LA201–LA209.

