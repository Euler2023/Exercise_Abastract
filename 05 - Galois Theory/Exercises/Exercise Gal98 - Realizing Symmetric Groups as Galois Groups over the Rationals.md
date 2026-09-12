---
title: "Exercise Gal98: Realizing Symmetric Groups as Galois Groups over the Rationals"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - inverse-galois-problem
  - symmetric-group
  - chinese-remainder-theorem
  - reduction-mod-p
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 14, printed pp. 322–323, PDF pp. 337–338"
created: 2026-09-12
---

# Exercise Gal98: Realizing Symmetric Groups as Galois Groups over the Rationals

## Problem Statement

> [!question] Exercise VI.14
> Prove that given a symmetric group $S_n$, there exists a polynomial $f(X) \in \mathbb Z[X]$ with leading coefficient 1 whose Galois group over $\mathbb Q$ is $S_n$.
>
> [Hint: Reducing mod 2, 3, 5, show that there exists a polynomial whose reductions are such that the Galois group contains enough cycles to generate $S_n$. Use the Chinese remainder theorem, also to be able to apply Eisenstein's criterion.]

## Hints

> [!hint]- Hint 1: Permutation Group Generators for $S_n$
> Recall that a transitive subgroup of $S_n$ containing a transposition $(a \ b)$ and an $(n-1)$-cycle fixing one of the remaining letters is the entire symmetric group $S_n$.

> [!hint]- Hint 2: Prescribing Reductions Modulo Coprime Primes
> Choose distinct primes $p_1, p_2, p_3$ (and optionally an Eisenstein prime $p_4$) and specify polynomials over finite fields:
> - An irreducible polynomial of degree $n$ (to ensure transitivity);
> - A product of a linear factor and an irreducible degree-$(n-1)$ factor (to produce an $(n-1)$-cycle);
> - A polynomial whose reduction yields a transposition (or a 2-cycle and odd cycles).

> [!hint]- Hint 3: The Chinese Remainder Theorem
> Because the coefficient ring $\mathbb Z$ satisfies the Chinese Remainder Theorem, one can simultaneously solve the system of congruences for each coefficient of $f(X)$.

## Solution

> [!success]- Solution
>
> We construct a monic polynomial $f(X) \in \mathbb Z[X]$ of degree $n$ whose Galois group over $\mathbb Q$ is isomorphic to $S_n$. For $n = 1$, $f(X) = X$ works trivially with $S_1 = \{1\}$. For $n = 2$, $f(X) = X^2 - 2$ has Galois group $S_2 \cong C_2$. For $n = 3$, $f(X) = X^3 - X - 1$ has discriminant $-23$ (non-square), so its Galois group is $S_3$.
>
> We now assume $n \ge 4$.
>
> ### 1. Group-Theoretic Criterion for Generating $S_n$
>
> > [!abstract] Lemma
> > Let $G$ be a transitive subgroup of $S_n$. If $G$ contains an $(n-1)$-cycle $\sigma$ and a transposition $\tau$, then $G = S_n$.
>
> *Proof of Lemma:*
> Relabel the letters so that the $(n-1)$-cycle is $\sigma = (1 \ 2 \ \dots \ n-1)$, fixing the letter $n$.
> - **Case A: The transposition moves $n$.**
>   Suppose $\tau = (i \ n)$ with $1 \le i \le n-1$. By conjugating $\tau$ by powers of $\sigma$, we obtain the transpositions
>   $$
>   \sigma^k (i \ n) \sigma^{-k} = (\sigma^k(i) \ n) = (j \ n)
>   $$
>   for all $j \in \{1, \dots, n-1\}$. The transpositions $(1 \ n), (2 \ n), \dots, (n-1 \ n)$ generate the entire symmetric group $S_n$, because for any distinct $j, k < n$, $(j \ k) = (j \ n)(k \ n)(j \ n)$.
>
> - **Case B: The transposition fixes $n$.**
>   Suppose $\tau = (i \ j)$ with $1 \le i < j \le n-1$. Then $\tau$ and $\sigma$ generate a subgroup of $S_{n-1}$ acting on $\{1, \dots, n-1\}$. By a standard property of symmetric groups, a primitive subgroup of $S_{n-1}$ containing a transposition is $S_{n-1}$. Since $G$ is transitive on all $n$ letters, there exists $g \in G$ such that $g(n) = 1$. Then $g \sigma g^{-1}$ or conjugates of $\tau$ by $g$ move $n$, reducing to Case A.
>
> In either case, $G = S_n$. $\blacksquare$
>
> ---
>
> ### 2. Prescribing Local Reductions
>
> Choose three distinct prime numbers $p_1, p_2, p_3$:
>
> 1. **At prime $p_1 = 2$ (Transitivity / Irreducibility):**
>    Over any finite field $\mathbb F_q$, there exist monic irreducible polynomials of every positive degree $n$.
>    Let $g_1(X) \in \mathbb F_2[X]$ be a monic irreducible polynomial of degree $n$.
>    Any polynomial $f(X) \in \mathbb Z[X]$ with $f(X) \equiv g_1(X) \pmod 2$ is irreducible over $\mathbb Q$ (by Gauss's lemma). In particular, $\operatorname{Gal}(f/\mathbb Q)$ acts transitively on the $n$ roots of $f$.
>
> 2. **At prime $p_2 = 3$ (Existence of an $(n-1)$-cycle):**
>    Let $h(X) \in \mathbb F_3[X]$ be a monic irreducible polynomial of degree $n - 1$.
>    Define
>    $$
>    g_2(X) = X \cdot h(X) \in \mathbb F_3[X].
>    $$
>    If $h(0) = 0$, replace $X$ by $X - 1$ or choose an irreducible $h$ with non-zero constant term. Then $\gcd(X, h(X)) = 1$, so $g_2(X)$ is square-free over $\mathbb F_3$.
>    By Dedekind's reduction theorem, any polynomial $f \equiv g_2 \pmod 3$ with $3 \nmid \operatorname{disc}(f)$ has a Frobenius element acting as an $(n-1)$-cycle fixing 1 root.
>
> 3. **At prime $p_3$ (Existence of a Transposition):**
>    Choose a prime $p_3 > n$. Over $\mathbb F_{p_3}$, let $q(X) \in \mathbb F_{p_3}[X]$ be a monic irreducible quadratic polynomial.
>    Since $p_3 > n$, the field $\mathbb F_{p_3}$ has $p_3 > n - 2$ elements. We can choose $n - 2$ distinct elements $c_1, \dots, c_{n-2} \in \mathbb F_{p_3}$ that are not roots of $q(X)$.
>    Define
>    $$
>    g_3(X) = q(X)(X - c_1)(X - c_2)\dots(X - c_{n-2}) \in \mathbb F_{p_3}[X].
>    $$
>    This polynomial has degree $2 + (n - 2) = n$ and factors into one irreducible quadratic and $n - 2$ distinct linear factors.
>    By Dedekind's theorem, the reduction mod $p_3$ supplies an element of cycle type $(2, 1, 1, \dots, 1)$, which is a transposition in $\operatorname{Gal}(f/\mathbb Q)$.
>
> ---
>
> ### 3. Synthesis via the Chinese Remainder Theorem
>
> Write the target polynomial as
> $$
> f(X) = X^n + a_{n-1} X^{n-1} + \dots + a_1 X + a_0 \in \mathbb Z[X].
> $$
> For each coefficient $a_j$ ($0 \le j \le n-1$), the Chinese Remainder Theorem allows us to simultaneously solve the system of congruences:
> $$
> a_j \equiv \text{coeff of } X^j \text{ in } g_1(X) \pmod{p_1},
> $$
> $$
> a_j \equiv \text{coeff of } X^j \text{ in } g_2(X) \pmod{p_2},
> $$
> $$
> a_j \equiv \text{coeff of } X^j \text{ in } g_3(X) \pmod{p_3}.
> $$
> Since $p_1, p_2, p_3$ are pairwise coprime, a simultaneous integer solution $a_j \in \mathbb Z$ exists for every coefficient.
>
> *(Optionally, one may include a fourth prime $p_4$ with $a_j \equiv 0 \pmod{p_4}$ for $0 \le j \le n-1$ and $a_0 \equiv p_4 \pmod{p_4^2}$ to satisfy Eisenstein's criterion at $p_4$, although irreducibility is already guaranteed by the reduction modulo $p_1$.)*
>
> ---
>
> ### 4. Conclusion
>
> The resulting polynomial $f(X) \in \mathbb Z[X]$ is monic of degree $n$.
> - Because $f(X) \equiv g_1(X) \pmod{p_1}$ is irreducible over $\mathbb F_{p_1}$, $f(X)$ is irreducible over $\mathbb Q$. Thus $G = \operatorname{Gal}(f/\mathbb Q) \le S_n$ is a transitive subgroup.
> - Because $f(X) \equiv g_2(X) \pmod{p_2}$ has factor degrees $1$ and $n - 1$ with distinct roots, $G$ contains an $(n-1)$-cycle.
> - Because $f(X) \equiv g_3(X) \pmod{p_3}$ has factor degrees $2, 1, \dots, 1$ with distinct roots, $G$ contains a transposition.
>
> By the Lemma in Section 1, $G$ must be the full symmetric group:
> $$
> \operatorname{Gal}(f/\mathbb Q) \cong S_n.
> $$

## Related Concepts

- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]
- [[05 - Galois Theory/Concepts/Finite Fields Galois|Galois Theory of Finite Fields]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]

## Notes

- **Routing:** Galois Theory is primary because realizing $S_n$ via reduction modulo good primes is the foundational constructive approach to the Inverse Galois Problem over $\mathbb Q$.
- **Source status:** Serge Lang, *Algebra*, rev. 3rd ed., Ch. VI, Exercise 14, printed pp. 322–323, PDF pp. 337–338.
