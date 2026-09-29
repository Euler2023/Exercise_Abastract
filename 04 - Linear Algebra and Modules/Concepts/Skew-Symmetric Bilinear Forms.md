---
title: Skew-Symmetric Bilinear Forms
aliases:
  - Alternating Bilinear Forms
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
  - bilinear-forms
  - symplectic-forms
created: 2026-08-12
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, §§8.1 and 8.8, printed pp. 229–231 and 249–252, PDF pp. 241–243 and 261–264; Serge Lang, Algebra, rev. 3rd ed., Ch. XV, §§8–9, printed pp. 587–589, PDF pp. 602–604; Emil Artin, Geometric Algebra (1957), printed pp. 141–142, PDF pp. 153–154 in the Internet Archive scan"
source_status: partially-verified
status: not-started
---

# Skew-Symmetric Bilinear Forms

## Definition

> [!info] Alternating and skew-symmetric forms
> A bilinear form $\omega:V\times V\to F$ is **alternating** if $\omega(v,v)=0$ for every $v$. It is **skew-symmetric** if
>
> $$
> \omega(u,v)=-\omega(v,u).
> $$
>
> The two conditions are equivalent when $\operatorname{char}F\ne2$. In characteristic $2$, “alternating” is the correct stronger condition.

Relative to any basis, an alternating form is represented by a matrix $A$ with $A^{\mathsf T}=-A$ and zero diagonal. Unlike a symmetric form, it does not define a useful quadratic form through $v\mapsto\omega(v,v)$: that function is identically zero.

## Nondegeneracy and Symplectic Bases

The radical is

$$
\operatorname{rad}\omega=\{v\in V:\omega(v,w)=0\text{ for all }w\in V\}.
$$

The form is nondegenerate if its radical is zero.

> [!abstract] Standard-form theorem
> A finite-dimensional nondegenerate alternating space has even dimension $2n$ and a basis in which the matrix is
>
> $$
> J=\begin{pmatrix}0&I_n\\-I_n&0\end{pmatrix}.
> $$

Such a basis is a **symplectic basis**. The theorem follows inductively by choosing $u,v$ with $\omega(u,v)=1$ and splitting off their nondegenerate two-dimensional span.

## Orthogonal Complements and Projection

For $W\le V$, define

$$
W^{\perp_\omega}=\{v\in V:\omega(w,v)=0\text{ for all }w\in W\}.
$$

If the restriction of $\omega$ to $W$ is nondegenerate, then

$$
V=W\oplus W^{\perp_\omega}.
$$

This decomposition defines the projection onto $W$ along $W^{\perp_\omega}$; it is not an orthogonal projection in the Euclidean metric unless additional structure is present.

## Determinants and the Pfaffian

Let $X$ be an alternating matrix over a commutative ring. In size $2m$, define the Pfaffian by a signed perfect-matching polynomial:

$$
\operatorname{Pf}_A(X)=\sum_{\mathcal M}\epsilon(\mathcal M)
\prod_{r=1}^{m}x_{i_rj_r}.
$$

Here $\mathcal M$ ranges over partitions of the indices into pairs, with $i_r<j_r$ and $i_1<\cdots<i_m$; $\epsilon(\mathcal M)$ is the sign of $(i_1,j_1,\ldots,i_m,j_m)$. Set $\operatorname{Pf}_A(\varnothing)=1$. For odd size there is no perfect matching, so the Pfaffian is the zero polynomial. This is a universal integral definition, valid also in characteristic $2$ and over rings with nilpotents; it is more precise than choosing an unspecified square root of a determinant.

The subscript $A$ identifies Emil Artin's convention in *Geometric Algebra*. For the interleaved matrix $J_{\mathrm{int}}=\operatorname{diag}(J_2,\ldots,J_2)$, with $J_2=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$, it gives $\operatorname{Pf}_A(J_{\mathrm{int}})=1$.

> [!warning] Lang's normalization uses a different ordering
> Lang's *Algebra*, XV §9, instead requires $\operatorname{Pf}_L(J_{\mathrm{grp}})=1$ for $J_{\mathrm{grp}}=\begin{pmatrix}0&I_m\\-I_m&0\end{pmatrix}$. Since $\operatorname{Pf}_A(J_{\mathrm{grp}})=(-1)^{m(m-1)/2}$, the conversion in size $2m$ is
>
> $$
> \operatorname{Pf}_L(X)=(-1)^{m(m-1)/2}\operatorname{Pf}_A(X).
> $$
>
> In size $4$ the two polynomials are negatives of one another. Dimension-changing cofactor formulas therefore require attention to the chosen convention.

Both conventions satisfy the same-size identities

$$
\det X=\operatorname{Pf}(X)^2,\qquad
\operatorname{Pf}(B^{\mathsf T}XB)=\det(B)\operatorname{Pf}(X).
$$

The second formula holds for every matrix $B$, including singular matrices. It implies that interchanging one pair of rows and the corresponding columns reverses the Pfaffian's sign, while scaling one row and its corresponding column by $t$ multiplies it by $t$.

In Emil Artin's convention, deleting indices $r<s$ gives the coefficient of $x_{rs}$ as

$$
C_{rs}=(-1)^{r+s-1}\operatorname{Pf}_A(X^{\widehat r\widehat s}),
\qquad \operatorname{Pf}_A(X)=\sum_{s=2}^{2m}x_{1s}C_{1s}.
$$

Each matching uses an index exactly once, so the polynomial is linear in the entries incident with any fixed index, while its total degree is $m$. For example,

$$
\operatorname{Pf}_A\begin{pmatrix}
0&a&b&c\\-a&0&d&e\\-b&-d&0&f\\-c&-e&-f&0
\end{pmatrix}=af-be+cd.
$$

Thus an integral alternating matrix of even size has a determinant that is the square of an integer. An odd-size alternating matrix has determinant zero over every commutative ring: prove this first for the generic matrix over an integral polynomial ring, using $\det X=\det(-X)=-\det X$, and then specialize. In characteristic $2$, merely requiring $X^{\mathsf T}=-X$ without a zero diagonal would not suffice.

## Examples

> [!example] Standard area form
> On $\mathbb R^2$,
>
> $$
> \omega((x_1,x_2),(y_1,y_2))=x_1y_2-x_2y_1
> $$
>
> has matrix $\begin{pmatrix}0&1\\-1&0\end{pmatrix}$ and is nondegenerate.

> [!example] Cayley transform
> If $S$ is a real skew-symmetric matrix, then $I+S$ is invertible and
>
> $$
> (I-S)(I+S)^{-1}
> $$
>
> is orthogonal.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Symplectic Groups|Symplectic Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Perfect Pairings over Finite Local Rings|Perfect Pairings over Finite Local Rings]]
- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```


## Source and Proof Status

- The definitions, orthogonal decomposition, and standard-form theorem are proved in [S1, Ch. 8, §8.8, Thms. 8.8.6–8.8.7, printed pp. 249–252, PDF pp. 261–264].
- The universal polynomial construction, Lang's normalization, and the determinant and congruence identities were checked in [S2, Ch. XV, §§8–9, printed pp. 587–589, PDF pp. 602–604]. The odd-size extension is requested in Exercise 19 and follows from the universal argument above.
- Emil Artin's alternative normalization and seven Pfaffian properties were checked directly in the [1957 original scan, printed pp. 141–142 / PDF pp. 153–154](https://archive.org/download/geometricalgebra033556mbp/geometricalgebra033556mbp.pdf#page=153). This is Emil Artin's *Geometric Algebra*, distinct from S1. The matching definition and the explicit sign conversion above make the convention used by each displayed formula unambiguous.
