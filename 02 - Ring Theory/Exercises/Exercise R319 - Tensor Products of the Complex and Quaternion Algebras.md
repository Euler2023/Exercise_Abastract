---
title: "Exercise R319: Tensor Products of the Complex and Quaternion Algebras"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIX, Exercise 20, printed p. 758, PDF p. 773"
created: 2026-09-29
---

# Exercise R319: Tensor Products of the Complex and Quaternion Algebras

## Problem Statement

> [!question] Lang XIX.20
> Establish isomorphisms:
>
> $$
> \mathbb C\otimes_{\mathbb R}\mathbb C\cong\mathbb C\times\mathbb C;
> \qquad
> \mathbb C\otimes_{\mathbb R}\mathbb H\cong M_2(\mathbb C);
> \qquad
> \mathbb H\otimes_{\mathbb R}\mathbb H\cong M_4(\mathbb R),
> $$
>
> where $M_d(F)$ means $d$ by $d$ matrices over $F$. For the third one, with $\mathbb H\otimes\mathbb H$, define an isomorphism
>
> $$
> f:\mathbb H\otimes_{\mathbb R}\mathbb H
> \longrightarrow\operatorname{Hom}_{\mathbb R}(\mathbb H,\mathbb H)
> \cong M_4(\mathbb R)
> $$
>
> by $f(x\otimes y)(z)=xz\overline y$, where if $y=y_0+y_1i+y_2j+y_3k$ then
>
> $$
> \overline y=y_0-y_1i-y_2j-y_3k.
> $$

## Hints

> [!hint]- Hint 1
> For the first map use the two real embeddings of $\mathbb C$; for the second represent $i,j$ by complex $2$ by $2$ matrices.

> [!hint]- Hint 2
> For the third, first construct the projection $z\mapsto\operatorname{Re}z$ from left and right quaternion multiplications, then construct rank-one matrix units.

## Solution

> [!success]- Independent derivation
> All tensor products in this proof are over $\mathbb R$ and carry the ordinary tensor-product algebra structure.
>
> **The complex tensor square.** Define
>
> $$
> \Phi(z\otimes w)=(zw,\overline z\,w).
> $$
>
> The formula is real-bilinear and multiplicative, so it induces a unital real algebra map. Viewing both sides as complex vector spaces through the second factor, its values on $1\otimes1,i\otimes1$ are $(1,1),(i,-i)$, a complex basis of $\mathbb C^2$. Thus it is bijective. Explicitly, $(a,b)$ is the image of
>
> $$
> 1\otimes\frac{a+b}{2}
> +i\otimes\frac{a-b}{2i}.
> $$
>
> **The complexification of the quaternions.** Put
>
> $$
> A=\begin{pmatrix}i&0\\0&-i\end{pmatrix},
> \qquad B=\begin{pmatrix}0&1\\-1&0\end{pmatrix}.
> $$
>
> They satisfy $A^2=B^2=-I$ and $AB=-BA$. The assignment $i\mapsto A,j\mapsto B,k\mapsto AB$ defines a real algebra map $\mathbb H\to M_2(\mathbb C)$; extend it complex-linearly to $\mathbb C\otimes\mathbb H$. The images $I,A$ span the diagonal matrices over $\mathbb C$, and $B,AB$ span the off-diagonal matrices, as their coordinate pairs $(1,-1),(i,i)$ are independent. Consequently the four images form a complex basis and the map is an isomorphism.
>
> **The quaternion tensor square.** The displayed map $f$ is well-defined by real bilinearity. Quaternion conjugation reverses products, so
>
> $$
> \begin{aligned}
> f(x\otimes y)f(x'\otimes y')(z)
> &=xx'z\,\overline{y'}\,\overline y\\
> &=xx'z\,\overline{yy'}
> =f(xx'\otimes yy')(z).
> \end{aligned}
> $$
>
> Thus $f$ is a unital algebra homomorphism. To establish surjectivity, write
>
> $$
> P(z)=\frac14(z-izi-jzj-kzk)=\operatorname{Re}z.
> $$
>
> Verification on the basis $1,i,j,k$ proves this identity. Each summand is in the image of $f$: for example $f(i\otimes i)(z)=-izi$. Hence $P$ is in the image.
>
> For $a,b\in\{1,i,j,k\}$, left multiplication by $a$ and right multiplication by $\overline b$ are also in the image. Their composition with $P$ gives
>
> $$
> z\longmapsto a\,\operatorname{Re}(z\overline b).
> $$
>
> The real number $\operatorname{Re}(z\overline b)$ is precisely the $b$-coordinate of $z$ in the basis $1,i,j,k$, as can be checked on those four basis elements. The sixteen displayed maps are therefore the matrix units of $\operatorname{End}_{\mathbb R}(\mathbb H)$. Thus $f$ is surjective. Its domain has real dimension $4\cdot4=16$, equal to that of the codomain, so it is injective as well.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Tensor Product]]
- [[02 - Ring Theory/Concepts/Clifford Algebras]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation]]

## Notes

All three identities and the conjugated right-action formula were checked at [S2, Ch. XIX, Exercise 20, printed p. 758, PDF p. 773]. The maps and surjectivity arguments are independent. Omitting the conjugation would turn right multiplication into an action of the opposite quaternion algebra and would not give the displayed multiplicative tensor map.
