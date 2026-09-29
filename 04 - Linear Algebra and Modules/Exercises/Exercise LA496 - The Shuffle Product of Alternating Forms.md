---
title: "Exercise LA496: The Shuffle Product of Alternating Forms"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIX, Exercise 5, printed pp. 753-754, PDF pp. 768-769"
created: 2026-09-29
---

# Exercise LA496: The Shuffle Product of Alternating Forms

## Problem Statement

> [!question] Lang XIX.5
> Let $R$ be a commutative ring. If $E$ is an $R$-module, denote by $L_a^r(E)$ the module of $r$-multilinear alternating maps of $E$ into $R$ itself (i.e. the $r$-multilinear alternating forms on $E$). Let $L_a^0(E)=R$, and let
>
> $$
> \Omega(E)=\bigoplus_{r=0}^\infty L_a^r(E).
> $$
>
> Show that $\Omega(E)$ is a graded $R$-algebra, the multiplication being defined as follows. If $\omega\in L_a^r(E)$ and $\psi\in L_a^s(E)$, and $v_1,\ldots,v_{r+s}$ are elements of $E$, then
>
> $$
> (\omega\wedge\psi)(v_1,\ldots,v_{r+s})
> =\sum\epsilon(\sigma)
> \omega(v_{\sigma1},\ldots,v_{\sigma r})
> \psi(v_{\sigma(r+1)},\ldots,v_{\sigma s}),
> $$
>
> the sum being taken over all permutations $\sigma$ of $(1,\ldots,r+s)$ such that $\sigma1<\cdots<\sigma r$ and $\sigma(r+1)<\cdots<\sigma s$.

> [!warning] Source issue
> The last argument of $\psi$ is printed $v_{\sigma s}$, and the last entry in its increasing-block condition is printed $\sigma s$. Both must be $v_{\sigma(r+s)}$ and $\sigma(r+s)$, respectively, to give $s$ arguments to $\psi$ and describe an $(r,s)$-shuffle. For example, when $r=s=1$, the literal first formula does not supply the required second input. The solution uses the corrected indices.

## Hints

> [!hint]- Hint 1
> Replace the two final indices $s$ by $r+s$, then index the terms by ordered complementary subsets $I,J$ of sizes $r,s$.

> [!hint]- Hint 2
> Expand a triple product as a sum over ordered partitions into three increasing blocks. Check true alternation by pairing terms when two inputs agree.

## Solution

> [!success]- Independent derivation
> Use the corrected shuffle formula. For an ordered partition $I\sqcup J=\{1,\ldots,r+s\}$, with $I=(i_1<\cdots<i_r)$ and $J=(j_1<\cdots<j_s)$, let $\epsilon(I,J)$ be the sign of the list $(i_1,\ldots,i_r,j_1,\ldots,j_s)$. Define
>
> $$
> (\omega\wedge\psi)(v_1,\ldots,v_{r+s})
> =\sum_{I\sqcup J}\epsilon(I,J)\omega(v_I)\psi(v_J).
> $$
>
> Every input occurs once in each term, so this is multilinear; it is also bilinear in $\omega,\psi$.
>
> To prove alternation without assuming $2$ invertible, suppose $v_a=v_b$ for $a\ne b$. Terms putting $a,b$ in the same block vanish by alternation of that factor. For the remaining terms, exchange $a$ and $b$ between the two blocks and then sort each block. This gives a fixed-point-free pairing of terms. The transposition of $a,b$ changes the total permutation sign by $-1$; the signs from re-sorting the blocks are exactly the signs picked up in the two alternating factors. Because the two vectors themselves agree, paired summands are negatives of one another. Their sum is zero over every $R$, also in characteristic $2$. Thus the product lies in $L_a^{r+s}(E)$.
>
> For $\eta\in L_a^t(E)$, expansion of $(\omega\wedge\psi)\wedge\eta$ gives exactly once each ordered partition $(I,J,K)$ into increasing blocks of sizes $r,s,t$. Its sign is $\epsilon(I,J,K)$, since the outer shuffle sign times the inner shuffle sign is the sign of the composite permutation. Expansion of $\omega\wedge(\psi\wedge\eta)$ gives the same partitions with the same signs and the same term
>
> $$
> \epsilon(I,J,K)\,\omega(v_I)\psi(v_J)\eta(v_K).
> $$
>
> Associativity follows. The unique shuffle with an empty block shows that the element $1\in L_a^0(E)=R$ is a two-sided unit, and the multiplication with degree-zero elements is ordinary scalar multiplication.
>
> Every element of the direct sum has finite support in degree; multiplying two such elements has finite support as well. Extending the homogeneous products by bilinearity therefore defines a unital graded $R$-algebra on $\Omega(E)$. Exchanging the two blocks also proves the additional identity
>
> $$
> \omega\wedge\psi=(-1)^{rs}\psi\wedge\omega.
> $$
>
> No factorial normalization has been used. In particular the construction works for arbitrary modules and arbitrary commutative coefficient rings.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Exterior Algebra]]
- [[02 - Ring Theory/Concepts/Filtered and Graded Algebras]]
- [[04 - Linear Algebra and Modules/Concepts/Module Definition]]

## Notes

Both pages, including the two printed final subscripts, were checked at [S2, Ch. XIX, Exercise 5, printed pp. 753-754, PDF pp. 768-769]. The proof is independent. The notation $\Omega(E)$ here means the algebra of alternating forms; it must not be confused with the module of universal differentials $\Omega^1_{A/R}$ in the following exercises.
