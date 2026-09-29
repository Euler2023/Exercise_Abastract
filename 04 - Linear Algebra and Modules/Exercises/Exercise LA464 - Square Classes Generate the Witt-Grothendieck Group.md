---
title: "Exercise LA464: Square Classes Generate the Witt-Grothendieck Group"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - witt-groups
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XV, Exercise 22, printed p. 599, PDF p. 614"
created: 2026-09-29
---

# Exercise LA464: Square Classes Generate the Witt-Grothendieck Group

## Problem Statement

> [!question] Lang, Chapter XV, Exercise 22
> Show that $WG(k)$ can be expressed as a homomorphic image of $\mathbb Z[k^*/k^{*2}]$. [Hint: Use the existence of orthogonal bases.]

> [!info] Meaning of the source notation
> As in Sections 10–11, assume $\operatorname{char}k\ne2$. The additive group of $\mathbb Z[k^*/k^{*2}]$ is the free abelian group on the nonzero square classes. A basis symbol $e_{\bar a}$ is a formal generator, not a scalar in $k$. We prove the requested surjection of additive groups.

## Hints

> [!hint]- Hint 1: Use one-dimensional forms
> Send $e_{\bar a}$ to the class of the form $\langle a\rangle:(x,y)\mapsto axy$. Changing $a$ by a square gives an isometric form.

> [!hint]- Hint 2: Diagonalize and then take differences
> An orthogonal basis writes each nondegenerate symmetric form as an orthogonal sum of such lines. Elements of $WG(k)$ are differences of classes of forms.

## Solution

> [!success]- Independent solution
> For $a\in k^*$, let $\langle a\rangle$ be the one-dimensional symmetric bilinear form with Gram matrix $(a)$. If $b=au^2$ with $u\in k^*$, multiplication by $u$ is an isometry from $\langle b\rangle$ to $\langle a\rangle$, since $a(ux)(uy)=bxy$. Thus $[\langle a\rangle]_G$ depends only on the square class $\bar a$.
>
> The universal property of a free abelian group gives a homomorphism
>
> $$
> \Phi:\mathbb Z[k^*/k^{*2}]\longrightarrow WG(k),\qquad
> \Phi\left(\sum_{\bar a}n_{\bar a}e_{\bar a}\right)
> =\sum_{\bar a}n_{\bar a}[\langle a\rangle]_G,
> $$
>
> where the sum has finite support and the integers may be negative.
>
> We justify the orthogonal diagonalization needed for surjectivity. For a nonzero nondegenerate symmetric form $g$ there is a vector $v$ with $g(v,v)\ne0$. Otherwise the identity
>
> $$
> 2g(x,y)=g(x+y,x+y)-g(x,x)-g(y,y)
> $$
>
> would force $g=0$, contradicting nondegeneracy on a positive-dimensional space. The line $kv$ is nondegenerate and splits off orthogonally: subtract $g(x,v)g(v,v)^{-1}v$ from each $x$ to obtain a vector in $v^\perp$. The restriction to $v^\perp$ is again nondegenerate, so induction gives
>
> $$
> g\simeq\langle a_1\rangle\perp\cdots\perp\langle a_r\rangle,
> \qquad a_i\in k^*.
> $$
>
> Hence the class of every actual form lies in the image of $\Phi$. Every element of $WG(k)$ is $[g]_G-[h]_G$, and diagonalizing both forms shows that it is also in the image. Therefore $\Phi$ is surjective, and $WG(k)\simeq\mathbb Z[k^*/k^{*2}]/\ker\Phi$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Witt and Witt-Grothendieck Groups|Witt and Witt-Grothendieck Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]

## Notes

- **Source and proof status:** [S2, Ch. XV, Ex. 22, printed p. 599, PDF p. 614], including the hint, was checked on the source image. Definitions of $WG(k)$ were checked on printed pp. 594–595 / PDF pp. 609–610. The construction and the orthogonal-basis argument are independent.
- **Boundary:** This is a surjection from the free abelian group on square classes, not from the square-class group itself to the additive group $WG(k)$. No formula $[\langle ab\rangle]_G=[\langle a\rangle]_G+[\langle b\rangle]_G$ is asserted.
- **Characteristic:** The proof explicitly divides by $2$. In characteristic $2$, nondegenerate alternating symmetric forms need not have an orthogonal basis of nondegenerate lines, so the argument cannot simply be transferred unchanged.
