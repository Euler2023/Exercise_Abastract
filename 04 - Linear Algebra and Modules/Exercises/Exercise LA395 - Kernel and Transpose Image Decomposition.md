---
title: "Exercise LA395: Kernel and Transpose Image Decomposition"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - bilinear-forms
  - orthogonality
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIII, Matrices and Linear Maps, Exercise 3, printed p. 545, PDF p. 560"
created: 2026-09-26
---

# Exercise LA395: Kernel and Transpose Image Decomposition

## Problem Statement

> [!question] Lang, Chapter XIII, Exercise 3
> Let $V,W$ be finite dimensional vector spaces over a field $k$. Suppose given non-degenerate bilinear forms on $V$ and $W$ respectively, denoted both by $\langle\, ,\,\rangle$. Let $L:V\to W$ be a surjective linear map and let $\,{}^tL$ be its transpose; that is, $\langle Lv,w\rangle=\langle v,{}^tLw\rangle$ for $v\in V$ and $w\in W$.
>
> (a) Show that $\,{}^tL$ is injective.
>
> (b) Assume in addition that if $v\in V$, $v\ne0$ then $\langle v,v\rangle\ne0$. Show that
> $$
> V=\ker L\oplus\operatorname{Im}{}^tL,
> $$
> and that the two summands are orthogonal. (Cf. Exercise 33 for an example.)

> [!warning] Source issue: meaning of orthogonality
> The printed assumptions allow non-symmetric bilinear forms. They imply $\langle\ker L,\operatorname{Im}{}^tL\rangle=0$, but need not imply $\langle\operatorname{Im}{}^tL,\ker L\rangle=0$. If “the two summands are orthogonal” means both orders, symmetry of the form on $V$ is an additional hypothesis.

## Hints

> [!hint]- Hint 1
> If $\,{}^tLw=0$, pair $w$ with every vector in $W$ using surjectivity of $L$.

> [!hint]- Hint 2
> Compute $\langle v,{}^tLw\rangle$ for $v\in\ker L$, then use the anisotropy assumption on an element of the intersection.

> [!hint]- Hint 3
> Compare $\dim\ker L+\dim\operatorname{Im}{}^tL$ with $\dim V$.

## Solution

> [!success]- Independent derivation
> **(a)** Suppose $\,{}^tLw=0$. For every $v\in V$,
> $$
> \langle Lv,w\rangle=\langle v,{}^tLw\rangle=0.
> $$
> As $L$ is surjective, $\langle z,w\rangle=0$ for every $z\in W$. Non-degeneracy of the form on $W$ gives $w=0$; thus $\,{}^tL$ is injective.
>
> **(b)** For $v\in\ker L$ and $w\in W$, the defining identity yields $\langle v,{}^tLw\rangle=\langle Lv,w\rangle=0$. This is the orthogonality relation in the indicated order.
>
> If $u\in\ker L\cap\operatorname{Im}{}^tL$, put $u={}^tLw$. The preceding relation applied with $v=u$ gives $\langle u,u\rangle=0$. The extra anisotropy hypothesis forces $u=0$. Finally, rank-nullity for the surjection $L$ and injectivity of $\,{}^tL$ give
> $$
> \dim\ker L+\dim\operatorname{Im}{}^tL
> =(\dim V-\dim W)+\dim W=\dim V.
> $$
> The intersection is zero and the dimensions add to $\dim V$, proving the stated direct sum. If the form on $V$ is symmetric, the displayed one-sided orthogonality also holds with the arguments reversed.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]

## Notes

- The statement, including its reference to Exercise 33, was checked against [S2, Ch. XIII, Exercise 3, printed p. 545, PDF p. 560]. The derivation is independent.
- To see the source ambiguity concretely, take $V=\mathbb R^2$ with $\langle v,w\rangle=v^{\mathsf T}\left(\begin{smallmatrix}1&1\\0&1\end{smallmatrix}\right)w$, take $W=\mathbb R$ with its usual pairing, and let $L(x,y)=x$. The form is non-degenerate and $\langle v,v\rangle=x^2+xy+y^2>0$ for $v\ne0$. Here $\ker L=\mathbb Re_2$ and $\operatorname{Im}{}^tL=\mathbb Re_1$, but $\langle e_1,e_2\rangle=1$. Thus only the ordered relation $\langle\ker L,\operatorname{Im}{}^tL\rangle=0$ follows without symmetry.
