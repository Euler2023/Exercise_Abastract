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
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, §§8.1 and 8.8, printed pp. 229–231 and 249–252, PDF pp. 241–243 and 261–264"
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

For a $2n\times2n$ skew-symmetric matrix $A$, its Pfaffian is the polynomial satisfying

$$
\det A=\operatorname{Pf}(A)^2.
$$

If $A$ has integer entries, $\operatorname{Pf}(A)$ is an integer. Hence the determinant is the square of an integer. An odd-dimensional skew-symmetric matrix has determinant zero.

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
- The Pfaffian identity is a standard external input not developed in Artin §8.8; Exercise LA18 includes a self-contained exterior-algebra justification of the identity used there.
