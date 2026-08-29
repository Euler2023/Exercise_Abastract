---
title: "Exercise R226: Graded Isomorphisms Detect Filtered Isomorphisms"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - filtered-algebras
  - graded-algebras
  - isomorphisms
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. III, Modules, Exercise 28, printed p. 172, PDF p. 187"
created: 2026-08-29
---

# Exercise R226: Graded Isomorphisms Detect Filtered Isomorphisms

## Problem Statement

> [!question] Exercise 28
> Let $A,B$ be filtered algebras, with
>
> $$
> A=\bigcup_iA_i,
> \qquad
> B=\bigcup_iB_i.
> $$
>
> Let $L:A\to B$ be an $(A_0,B_0)$-linear map preserving the filtration, that is, $L(A_i)\subseteq B_i$ for all $i$, and
>
> $$
> L(ca)=L(c)L(a)
> $$
>
> for $c\in A_0$ and $a\in A_i$, for all $i$.
>
> (a) Show that $L$ induces an $(A_0,B_0)$-linear map
>
> $$
> \operatorname{gr}_i(L):\operatorname{gr}_i(A)
> \longrightarrow
> \operatorname{gr}_i(B)
> $$
>
> for all $i$.
>
> (b) Suppose that $\operatorname{gr}_i(L)$ is an isomorphism for all $i$. Show that $L$ is an $(A_0,B_0)$-isomorphism.

## Hints

> [!hint]- Hint 1
> In part (a), send $a+A_{i-1}$ to $L(a)+B_{i-1}$. Filtration preservation is exactly what makes this independent of the representative.

> [!hint]- Hint 2
> For injectivity in part (b), if $L(a)=0$ with $a\in A_i$, use injectivity on the $i$-th graded quotient to force $a\in A_{i-1}$, and descend.

> [!hint]- Hint 3
> For surjectivity, induct on the filtration degree. Lift the highest graded part of $b\in B_i$ to some $a_i\in A_i$; the error $b-L(a_i)$ then lies in $B_{i-1}$.

## Solution

> [!success]- Independently derived solution
> Put $A_{-1}=B_{-1}=0$.
>
> **(a) Construction on graded pieces.** For every $i\ge0$, define
>
> $$
> \operatorname{gr}_i(L)(a+A_{i-1})
> :=L(a)+B_{i-1}.
> $$
>
> If $a-a'\in A_{i-1}$, then filtration preservation gives
>
> $$
> L(a)-L(a')=L(a-a')\in B_{i-1},
> $$
>
> so the displayed rule is well defined. Additivity follows from that of $L$. Moreover, for $c\in A_0$ and $a\in A_i$,
>
> $$
> \operatorname{gr}_i(L)(ca+A_{i-1})
> =L(c)L(a)+B_{i-1},
> $$
>
> which is precisely the scalar compatibility induced by $L|_{A_0}:A_0\to B_0$. Hence $\operatorname{gr}_i(L)$ is $(A_0,B_0)$-linear.
>
> **(b), injectivity.** Suppose $L(a)=0$. Exhaustivity gives an index $i$ with $a\in A_i$. The class of $a$ in $A_i/A_{i-1}$ is sent to zero. Since $\operatorname{gr}_i(L)$ is injective,
>
> $$
> a\in A_{i-1}.
> $$
>
> Applying the same argument successively in degrees $i-1,i-2,\ldots,0$ yields $a\in A_{-1}=0$. Thus $L$ is injective.
>
> **(b), surjectivity and the filtration on the inverse.** We prove by induction on $i$ that
>
> $$
> B_i=L(A_i).
> $$
>
> For $i=0$, the claim is the surjectivity of
>
> $$
> \operatorname{gr}_0(L):A_0/A_{-1}\longrightarrow B_0/B_{-1},
> $$
>
> since $A_{-1}=B_{-1}=0$. Now let $i>0$ and assume $B_{i-1}=L(A_{i-1})$. Given $b\in B_i$, surjectivity of $\operatorname{gr}_i(L)$ supplies $a_i\in A_i$ such that
>
> $$
> L(a_i)+B_{i-1}=b+B_{i-1}.
> $$
>
> Therefore $b-L(a_i)\in B_{i-1}$. By the induction hypothesis there is $a'\in A_{i-1}$ with
>
> $$
> L(a')=b-L(a_i).
> $$
>
> Hence $b=L(a_i+a')$ with $a_i+a'\in A_i$. Thus $B_i\subseteq L(A_i)$; the reverse inclusion is filtration preservation. Therefore $B_i=L(A_i)$ for every $i$. Because $B=\bigcup_iB_i$, the map $L$ is surjective, and $L^{-1}$ also preserves the filtration.
>
> We have proved that $L$ is bijective. In degree $0$, $\operatorname{gr}_0(L)=L|_{A_0}:A_0\to B_0$ is an isomorphism. If $b_0=L(c)\in B_0$ and $b=L(a)\in B$, then
>
> $$
> L^{-1}(b_0b)=L^{-1}(L(c)L(a))=ca
> =L^{-1}(b_0)L^{-1}(b),
> $$
>
> so the inverse has the corresponding $(B_0,A_0)$-linear structure. Consequently $L$ is an $(A_0,B_0)$-isomorphism.

## Related Concepts

- [[02 - Ring Theory/Concepts/Filtered and Graded Algebras|Filtered and Graded Algebras]]
- [[04 - Linear Algebra and Modules/Concepts/Quotient Modules|Quotient Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

- **Method boundary:** Exhaustivity is essential in both directions: it puts each element into a finite filtration stage, so the descending and ascending inductions terminate.
- **Claim boundary:** The conclusion is the $(A_0,B_0)$-linear isomorphism requested in the source. It should not be promoted to an algebra isomorphism without the additional hypothesis that $L$ preserves arbitrary products.
- **Source status:** The hypotheses and both parts were visually checked at [S2, Ch. III, Ex. 28, printed p. 172, PDF p. 187]. The quotient construction and filtration induction are independent.
