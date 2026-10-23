---
title: Bilinear and Hermitian Forms
aliases:
  - Real Bilinear Forms
  - Hermitian Forms
  - Hermitian Matrix
  - Hermitian Matrices
  - Self-Adjoint Matrix
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

## Transpose and Conjugate Transpose

> [!info] Transpose and conjugate transpose
> For a matrix $A=(a_{ij})\in M_{m\times n}(F)$ over a field $F$, its **transpose** $A^{\mathsf T}\in M_{n\times m}(F)$ exchanges rows and columns:
> $$
> (A^{\mathsf T})_{ij}=a_{ji}.
> $$
> For a complex matrix, write $\overline A=(\overline{a_{ij}})$ for entrywise complex conjugation. Its **conjugate transpose**, also called its **adjoint matrix**, is
> $$
> A^*=\overline A^{\mathsf T},
> \qquad
> (A^*)_{ij}=\overline{a_{ji}}.
> $$
> Transposition changes the positions; conjugate transposition also conjugates each entry. For real matrices, $A^*=A^{\mathsf T}$.

For compatible matrix products, transposition reverses the order:

$$
(AB)^{\mathsf T}=B^{\mathsf T}A^{\mathsf T},
\qquad
(AB)^*=B^*A^*,
\qquad
(A^*)^*=A.
$$

**Independent verification.** If $A\in M_{m\times n}(\mathbb C)$ and $B\in M_{n\times p}(\mathbb C)$, the $(i,j)$ entry of $(AB)^*$ is

$$
\overline{(AB)_{ji}}
=\sum_{k=1}^n\overline{a_{jk}}\,\overline{b_{ki}}
=\sum_{k=1}^n(B^*)_{ik}(A^*)_{kj}
=(B^*A^*)_{ij}.
$$

Omitting conjugation gives the transpose identity; exchanging indices and conjugating twice gives $(A^*)^*=A$. The conjugate-transpose definition and adjoint identities are given at [S1, Ch. 8, §8.3, (8.3.5), printed p. 233, PDF p. 245].

## Hermitian Matrices

> [!info] Hermitian matrix (self-adjoint matrix)
> A square complex matrix $H\in M_n(\mathbb C)$ is **Hermitian**, or **self-adjoint**, if
> $$
> H^*=H.
> $$
> Equivalently, its entries satisfy
> $$
> h_{ij}=\overline{h_{ji}}\quad\text{for all }1\le i,j\le n.
> $$
> Consequently $h_{ii}$ is real, and entries on opposite sides of the diagonal are complex conjugates. For a real matrix, being Hermitian is equivalent to being **symmetric**, $H^{\mathsf T}=H$.

The definition, entry conditions, and real symmetric case are explicit at [S1, Ch. 8, §8.3, (8.3.6)–(8.3.7), printed p. 233, PDF p. 245]. The entry conditions follow directly from the conjugate-transpose formula above, with $i=j$ giving $h_{ii}=\overline{h_{ii}}\in\mathbb R$.

> [!example] A complex Hermitian matrix and a nonexample
> $$
> H=\begin{pmatrix}2&1+i\\1-i&3\end{pmatrix},
> \qquad
> K=\begin{pmatrix}2&1+i\\1+i&3\end{pmatrix}.
> $$
> Here $H^*=H$, since $\overline{1-i}=1+i$. In contrast, $K^*\ne K$: its $(1,2)$ entry is $1-i$, which differs from $k_{12}=1+i$. The matrix $K$ is symmetric under ordinary transposition, illustrating why complex conjugation is essential over $\mathbb C$.

Hermitian, unitary, positive definite, and invertible are distinct conditions. For example, $D=\operatorname{diag}(2,3)$ is Hermitian but is not unitary because $D^*D=\operatorname{diag}(4,9)\ne I$. The Hermitian matrix $J=\operatorname{diag}(1,-1)$ is not positive definite, since $e_2^*Je_2=-1$; the zero matrix is Hermitian but is not invertible for $n\ge1$. These examples are independent checks from the definitions. Unitary matrices are defined in [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups#Unitary Matrices|Classical Linear Groups: Unitary Matrices]].

### Relation to Forms and Self-Adjoint Operators

Use Artin's standard Hermitian product $\langle X,Y\rangle=X^*Y$, which is conjugate-linear in the first variable and linear in the second [S1, (8.3.3), printed p. 232, PDF p. 244]. For $T_H(X)=HX$,

$$
\langle HX,Y\rangle=X^*H^*Y,
\qquad
\langle X,HY\rangle=X^*HY.
$$

Thus $T_H$ is **self-adjoint** for this product exactly when $H^*=H$: equality for all $X,Y$ implies equality of every matrix entry by taking $X=e_i$, $Y=e_j$. This matrix characterization also holds in an orthonormal basis of a Hermitian inner product space. The general adjoint-operator definition is in [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem#Definitions|Normal Operators and the Spectral Theorem]].

The associated form $q_H(X,Y)=X^*HY$ is conjugate-linear in $X$ and linear in $Y$. It has Hermitian symmetry exactly when $H$ is Hermitian, because

$$
\overline{q_H(Y,X)}=X^*H^*Y.
$$

This is the coordinate correspondence of [S1, Proposition 8.3.8, printed p. 233, PDF p. 245]; the verification here is independent. Self-adjointness should be distinguished from preserving a form: an invertible transformation $P$ preserves $q_H$ when $P^*HP=H$, as follows by substituting $PX,PY$. For the standard product ($H=I$), that preservation condition is $P^*P=I$, the unitary condition. These coordinate calculations do not require a spectral theorem.

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
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups#Unitary Matrices|Unitary Matrices]]
- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem|Normal Operators and the Spectral Theorem]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

- The definitions, coordinate matrices, change-of-basis laws, and positivity conventions are stated and developed in [S1, Ch. 8, §§8.1–8.3, printed pp. 229–234, PDF pp. 241–246].
- The decomposition formulas and the listed matrix consequences are elementary derivations from those definitions. Their applications are proved independently in Exercises LA201–LA209.
- On 2026-10-01, the original page images for [S1, Ch. 8, §8.3, printed pp. 232–234, PDF pp. 244–246] were checked for the added conjugate-transpose and Hermitian-matrix definitions, (8.3.3), (8.3.5)–(8.3.7), Proposition 8.3.8, positivity, and the change-of-basis formula (8.3.9). No source issue was found in these added statements.
- The new entrywise product-order proof, $2\times2$ examples and nonexamples, and coordinate checks connecting Hermitian matrices to self-adjointness, Hermitian forms, and form preservation are independent derivations in this vault. The adjoint-matrix interpretation uses the specified standard Hermitian product or an orthonormal basis; this note does not identify the conjugate transpose with the adjoint matrix in an arbitrary basis. Spectral-theorem results remain in the linked specialized note.
