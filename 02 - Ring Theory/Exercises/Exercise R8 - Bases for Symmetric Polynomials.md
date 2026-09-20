---
title: "Exercise R8: Two Bases for Symmetric Polynomials"
topic: ring-theory
difficulty: advanced
status: not-started
tags: [exercise, ring-theory, symmetric-polynomials]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 1, Ex. 1.2, printed p. 505, PDF p. 517"
created: 2026-08-12
---

# Exercise R8: Two Bases for Symmetric Polynomials

## Problem Statement

> [!question] Exercise 1.2
> Find two bases for the ring of symmetric polynomials, as a module over the ring $R$.

> [!warning] Correction to the earlier interpretation
> Here $R$ is the **coefficient ring** in $R[u_1,\ldots,u_n]$, as defined at the start of Artin §16.1 [S1, printed p. 477, PDF p. 489]. The module in this exercise is the symmetric subring $R[u_1,\ldots,u_n]^{S_n}$ over $R$.
>
> The earlier version of this note instead treated the full polynomial ring over its symmetric subring and gave a finite basis of $n!$ monomials. That is a different problem. The printed exercise is consistent with the source's notation; the error was in this note's interpretation.

## Hints

> [!hint]- Hint 1
> A polynomial is symmetric precisely when monomials in the same permutation orbit have the same coefficient. Group its monomials by these orbits, counting each distinct monomial once.

> [!hint]- Hint 2
> Artin's Symmetric Functions Theorem says that every symmetric polynomial has a unique expression as a polynomial in $s_1,\ldots,s_n$. Which elements correspond to the ordinary monomial basis of $R[z_1,\ldots,z_n]$ under the substitution $z_i\mapsto s_i$?

> [!hint]- Hint 3
> To see the uniqueness directly, use lexicographic order with $u_1>\cdots>u_n$. The leading monomial of $s_i$ is $u_1\cdots u_i$. For a weakly decreasing exponent vector $\lambda_1\ge\cdots\ge\lambda_n\ge0$, examine
> $$
> s_1^{\lambda_1-\lambda_2}s_2^{\lambda_2-\lambda_3}\cdots
> s_{n-1}^{\lambda_{n-1}-\lambda_n}s_n^{\lambda_n}.
> $$

## Solution

> [!success]- Solution
> ### 1. The module and the meaning of a basis
>
> Let $R$ be a nonzero commutative ring with identity, let $n\ge1$, and put
> $$
> A=R[u_1,\ldots,u_n],\qquad
> S=A^{S_n}=\{f\in A:\sigma(f)=f\text{ for every }\sigma\in S_n\}.
> $$
> A basis of $S$ over $R$ means a family of symmetric polynomials such that every $f\in S$ is a **unique finite $R$-linear combination** of its members. Thus we must prove both spanning and $R$-linear independence. The coefficients of these linear combinations lie in $R$, not in $S$.
>
> The two bases will be
> $$
> \mathcal B_{\mathrm{orb}}
> =\{m_\lambda:\lambda_1\ge\cdots\ge\lambda_n\ge0\},
> \qquad
> \mathcal B_{\mathrm{elem}}
> =\{s_1^{a_1}\cdots s_n^{a_n}:a_1,\ldots,a_n\ge0\}.
> $$
> We define the notation and prove each assertion below.
>
> ### 2. First basis: monomial orbit sums
>
> Write $u^\alpha=u_1^{\alpha_1}\cdots u_n^{\alpha_n}$ for $\alpha\in\mathbf Z_{\ge0}^n$. Permuting the variables permutes the exponents. Every orbit of monomials has exactly one exponent vector in weakly decreasing order,
> $$
> \lambda=(\lambda_1,\ldots,\lambda_n),\qquad
> \lambda_1\ge\cdots\ge\lambda_n\ge0.
> $$
> This is a partition with at most $n$ parts, padded with zeros. Define
> $$
> m_\lambda=\sum_{\alpha\in\operatorname{Orb}(\lambda)}u^\alpha,
> $$
> where the sum is over the **distinct** permutations of the exponent vector. Each monomial has coefficient $1$. For example, in three variables,
> $$
> \begin{aligned}
> m_{(2,0,0)}&=u_1^2+u_2^2+u_3^2,\\
> m_{(1,1,0)}&=u_1u_2+u_1u_3+u_2u_3,\\
> m_{(2,1,0)}&=u_1^2u_2+u_1^2u_3+u_1u_2^2
> +u_2^2u_3+u_1u_3^2+u_2u_3^2.
> \end{aligned}
> $$
> Every $m_\lambda$ is symmetric, since a permutation only rearranges its summands.
>
> **Spanning.** Write a symmetric polynomial as a finite sum
> $$
> f=\sum_\alpha c_\alpha u^\alpha,\qquad c_\alpha\in R.
> $$
> Equality $\sigma(f)=f$ is equality of coefficients of ordinary monomials. It says that $c_\alpha$ is constant on each orbit of exponent vectors. If this common coefficient is $c_\lambda$, grouping the terms of $f$ by their orbits gives
> $$
> f=\sum_\lambda c_\lambda m_\lambda.
> $$
> Only finitely many coefficients occur, so this is an $R$-linear combination of members of $\mathcal B_{\mathrm{orb}}$.
>
> **Linear independence.** Suppose a finite relation satisfies
> $$
> \sum_\lambda r_\lambda m_\lambda=0,\qquad r_\lambda\in R.
> $$
> Fix one index $\lambda$. The monomial $u^\lambda$ occurs in $m_\lambda$ with coefficient $1$, and it occurs in no other $m_\mu$, since distinct orbits are disjoint. Its coefficient in the displayed sum is therefore exactly $r_\lambda$. Equality to the zero polynomial forces $r_\lambda=0$. Doing this for every index proves independence.
>
> Hence $\mathcal B_{\mathrm{orb}}$ is an $R$-basis of $S$.
>
> **Why distinct orbit elements matter.** Summing over all $\sigma\in S_n$ can repeat monomials. For example, when $n=3$,
> $$
> \sum_{\sigma\in S_3}\sigma(u_1u_2)=2m_{(1,1,0)}.
> $$
> The left side is zero in characteristic $2$, whereas $m_{(1,1,0)}$ is not. The orbit-sum construction uses no division by an orbit size or by $n!$.
>
> ### 3. Second basis: monomials in the elementary symmetric polynomials
>
> Recall
> $$
> s_i=\sum_{1\le j_1<\cdots<j_i\le n}u_{j_1}\cdots u_{j_i}
> \qquad(1\le i\le n).
> $$
> Every product $s_1^{a_1}\cdots s_n^{a_n}$ is symmetric.
>
> Artin's Symmetric Functions Theorem, Theorem 16.1.6 [S1, printed p. 479, PDF p. 491], asserts that substitution gives an isomorphism
> $$
> R[z_1,\ldots,z_n]\longrightarrow S,\qquad
> G(z_1,\ldots,z_n)\longmapsto G(s_1,\ldots,s_n).
> $$
> Here the $z_i$ are new independent variables. Since the monomials $z_1^{a_1}\cdots z_n^{a_n}$ are an $R$-basis of the domain, their images form the claimed basis $\mathcal B_{\mathrm{elem}}$.
>
> More explicitly, the theorem's **existence** assertion gives spanning, and its **uniqueness** assertion gives independence: a relation $\sum_a r_a s_1^{a_1}\cdots s_n^{a_n}=0$ is an expression for the zero symmetric polynomial, whose unique expression in the $s_i$ has all coefficients zero.
>
> The next steps provide a direct proof of these two assertions, so that the basis argument does not rest on an unexplained appeal to the theorem.
>
> ### 4. Leading monomials of the second family
>
> Use lexicographic order with $u_1>\cdots>u_n$: compare exponent vectors at their first differing coordinate. For example,
> $$
> u_1^3>u_1^2u_2>u_1u_2^2>u_2^3.
> $$
> The largest monomial of $s_i$ is $u_1\cdots u_i$, with coefficient $1$. Lexicographic order is preserved by multiplying monomials, so the largest monomial of a product of the $s_i$ is the product of their largest monomials, again with coefficient $1$:
> $$
> \operatorname{LM}(s_1^{a_1}\cdots s_n^{a_n})
> =u_1^{a_1+\cdots+a_n}
> u_2^{a_2+\cdots+a_n}\cdots u_n^{a_n}.
> $$
> Put $\lambda_i=a_i+\cdots+a_n$. Then $\lambda_1\ge\cdots\ge\lambda_n\ge0$, and conversely
> $$
> a_i=\lambda_i-\lambda_{i+1}\quad(1\le i\le n),
> \qquad \lambda_{n+1}=0.
> $$
> Thus different exponent tuples $a$ give different leading monomials. It is useful to write the same family as
> $$
> P_\lambda
> =s_1^{\lambda_1-\lambda_2}
> s_2^{\lambda_2-\lambda_3}\cdots
> s_{n-1}^{\lambda_{n-1}-\lambda_n}s_n^{\lambda_n}.
> $$
> Its leading monomial is exactly $u^\lambda$, with coefficient $1$. Its total degree in the original variables is
> $$
> \deg P_\lambda
> =\sum_{i=1}^n i(\lambda_i-\lambda_{i+1})
> =\lambda_1+\cdots+\lambda_n.
> $$
>
> ### 5. Direct proof that the second family spans
>
> Let $f\in S$ be nonzero, and let $c\,u^\lambda$ be its leading term, with $c\ne0$ in $R$. We first show that $\lambda$ is weakly decreasing. If $\lambda_i<\lambda_{i+1}$ for some $i$, interchanging $u_i$ and $u_{i+1}$ produces a lexicographically larger monomial. Symmetry gives that monomial the same nonzero coefficient $c$, contradicting the choice of the leading term.
>
> We can therefore form $P_\lambda$ as above. Both $f$ and $cP_\lambda$ have leading term $c\,u^\lambda$, so
> $$
> f_1=f-cP_\lambda
> $$
> is symmetric and is either zero or has a strictly smaller leading monomial. No division by $c$ is required.
>
> Repeat on $f_1$. To justify termination, let $D=\deg f$. Each subtracted $P_\lambda$ is homogeneous of the degree of the current leading monomial, which is at most $D$. Consequently no monomial of degree greater than $D$ is introduced. There are only finitely many monomials of total degree at most $D$, and the leading monomial strictly decreases at every nonzero step. The process must stop.
>
> Collecting the subtracted terms expresses $f$ as a finite $R$-linear combination of the $P_\lambda$, hence of the $s_1^{a_1}\cdots s_n^{a_n}$.
>
> ### 6. Direct proof of linear independence
>
> Suppose there is a finite relation
> $$
> \sum_\lambda r_\lambda P_\lambda=0
> $$
> with at least one nonzero coefficient. Among indices with $r_\lambda\ne0$, choose $\lambda^\ast$ such that $u^{\lambda^\ast}$ is largest in lexicographic order.
>
> The polynomial $P_{\lambda^\ast}$ contributes coefficient $r_{\lambda^\ast}$ to this monomial. Every other participating $P_\lambda$ has a strictly smaller leading monomial, so all of its monomials are smaller and none can cancel that contribution. The coefficient of $u^{\lambda^\ast}$ in the sum is therefore $r_{\lambda^\ast}\ne0$, a contradiction.
>
> This proves independence over $R$. In particular, the argument remains valid when $R$ has zero divisors: the relevant leading coefficients are $1$, so multiplying them by a nonzero $r_\lambda$ cannot make them vanish.
>
> ### 7. Three variables: the two bases in total degree three
>
> In $R[u_1,u_2,u_3]^{S_3}$, the homogeneous degree-three part has the orbit-sum basis
> $$
> \begin{aligned}
> m_{(3,0,0)}&=u_1^3+u_2^3+u_3^3,\\
> m_{(2,1,0)}&=\sum_{i\ne j}u_i^2u_j,\\
> m_{(1,1,1)}&=u_1u_2u_3.
> \end{aligned}
> $$
> Its second basis is
> $$
> s_1^3,\qquad s_1s_2,\qquad s_3.
> $$
> These are precisely the products with weighted degree $a_1+2a_2+3a_3=3$, because $\deg s_i=i$.
>
> Expanding $s_1^3=(u_1+u_2+u_3)^3$ gives coefficient $1$ for each cube, coefficient $3$ for each $u_i^2u_j$ with $i\ne j$, and coefficient $6$ for $u_1u_2u_3$. Expanding $s_1s_2$ gives each $u_i^2u_j$ once and $u_1u_2u_3$ three times. Hence
> $$
> \begin{aligned}
> s_1^3&=m_{(3,0,0)}+3m_{(2,1,0)}+6m_{(1,1,1)},\\
> s_1s_2&=m_{(2,1,0)}+3m_{(1,1,1)},\\
> s_3&=m_{(1,1,1)}.
> \end{aligned}
> $$
> Solving these equations requires no division:
> $$
> \begin{aligned}
> m_{(3,0,0)}&=s_1^3-3s_1s_2+3s_3,\\
> m_{(2,1,0)}&=s_1s_2-3s_3,\\
> m_{(1,1,1)}&=s_3.
> \end{aligned}
> $$
> For instance, if $f=a\,m_{(3,0,0)}+b\,m_{(2,1,0)}+c\,m_{(1,1,1)}$ with $a,b,c\in R$, then its unique expansion in the second basis is
> $$
> f=a\,s_1^3+(b-3a)s_1s_2+(3a-3b+c)s_3.
> $$
> All these identities hold in every characteristic, with the integer coefficients interpreted in $R$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Symmetric Polynomials and Newton Identities|Symmetric Polynomials and Newton Identities]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]

## Notes

- **Source and notation:** The exercise is transcribed from [S1, Ch. 16, §1, Exercise 1.2, printed p. 505, PDF p. 517]. The coefficient-ring notation is fixed at printed p. 477 / PDF p. 489. The orbit-sum basis is described at printed pp. 477–478 / PDF pp. 489–490, and the Symmetric Functions Theorem is Theorem 16.1.6 at printed p. 479 / PDF p. 491.
- **Proof status:** The coefficient-by-coefficient orbit argument and the lexicographic leading-term proof are supplied here in detail. The latter proves the needed existence and uniqueness directly; no generic Galois-extension degree calculation is used.
- **Module basis versus algebra generators:** The finite set $\{s_1,\ldots,s_n\}$ generates $S$ as an $R$-algebra. An $R$-module basis must include all products $s_1^{a_1}\cdots s_n^{a_n}$, including $1$. For $n\ge1$, the full module basis is infinite; its homogeneous degree-$d$ portion is finite.
- **Degree and indexing:** The degree-$d$ orbit basis is indexed by partitions $\lambda$ of $d$ with at most $n$ parts. The second is indexed by nonnegative tuples satisfying $\sum_i i a_i=d$. The bijection is $\lambda_i=\sum_{j=i}^n a_j$. When $n=1$, the two constructions coincide with $\{1,u_1,u_1^2,\ldots\}$.
- **Correction boundary:** The earlier finite $n!$-element basis belongs to the different extension $F[s_1,\ldots,s_n]\subset F[u_1,\ldots,u_n]$. It does not answer this exercise about the symmetric ring over its coefficient ring.
