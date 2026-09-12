---
title: "Exercise Gal94: Properties of Polynomials with Symmetric Galois Group"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - symmetric-group
  - field-automorphisms
  - cyclotomic-extensions
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 10, printed p. 322, PDF p. 337"
created: 2026-09-12
---

# Exercise Gal94: Properties of Polynomials with Symmetric Galois Group

## Problem Statement

> [!question] Exercise VI.10
> Let $f(X) \in \mathbb Q[X]$ be a polynomial of degree $n$, and let $K$ be a splitting field of $f$ over $\mathbb Q$. Suppose that $\operatorname{Gal}(K/\mathbb Q)$ is the symmetric group $S_n$ with $n > 2$.
>
> (a) Show that $f$ is irreducible over $\mathbb Q$.
>
> (b) If $\alpha$ is a root of $f$, show that the only automorphism of $\mathbb Q(\alpha)$ is the identity.
>
> (c) If $n \ge 4$, show that $\alpha^n \notin \mathbb Q$.

## Hints

> [!hint]- Hint 1: Transitivity on Roots
> The symmetric group $S_n$ acts transitively on the $n$ roots of $f$. Show that any non-trivial factorization of $f$ would produce an invariant proper subset of roots, contradicting the full symmetry of $S_n$.

> [!hint]- Hint 2: Normalizer of a Point Stabilizer
> Under the Galois correspondence, $\mathbb Q(\alpha)$ corresponds to the stabilizer subgroup $H = \operatorname{Stab}_{S_n}(\alpha) \cong S_{n-1}$. Relate $\operatorname{Aut}(\mathbb Q(\alpha))$ to the quotient $N_{S_n}(H)/H$.

> [!hint]- Hint 3: Splitting Field of a Binomial
> If $\alpha^n = c \in \mathbb Q$, then $f(X) = X^n - c$. Bound the degree of the splitting field $\mathbb Q(\alpha, \zeta_n)$ over $\mathbb Q$ by $n \varphi(n)$, and compare with $n!$ for $n \ge 4$.

## Solution

> [!success]- Solution
>
> ### (a) Irreducibility of $f(X)$ over $\mathbb Q$
>
> Let $R = \{\alpha_1, \dots, \alpha_n\}$ be the roots of $f(X)$ in $K$. By hypothesis, $\operatorname{Gal}(K/\mathbb Q) \cong S_n$ acts as the full group of permutations of $R$.
>
> Suppose $f(X)$ were reducible over $\mathbb Q$, so that $f(X) = g(X) h(X)$ for non-constant polynomials $g, h \in \mathbb Q[X]$ with $\deg g = r$ ($1 \le r < n$).
> Every root of $g$ is a root of $f$. Since $g$ has rational coefficients, any automorphism $\sigma \in \operatorname{Gal}(K/\mathbb Q)$ must map any root of $g$ to another root of $g$.
>
> Consequently, the set of roots $R_g = \{\beta \in R : g(\beta) = 0\}$ of cardinality $r$ is invariant under the entire Galois group:
> $$
> \sigma(R_g) = R_g \quad \text{for all } \sigma \in \operatorname{Gal}(K/\mathbb Q).
> $$
> However, $\operatorname{Gal}(K/\mathbb Q) = S_n$ contains permutations that can map any subset of size $r$ to any other subset of size $r$ in $R$. In particular, since $1 \le r < n$, there exist permutations in $S_n$ that do not preserve $R_g$ (the stabilizer of a subset of size $r$ in $S_n$ is $S_r \times S_{n-r}$, which has order $r!(n-r)! < n!$).
>
> This contradiction proves that $f(X)$ cannot have any non-trivial factor in $\mathbb Q[X]$, so $f(X)$ is irreducible over $\mathbb Q$.
>
> ---
>
> ### (b) $\operatorname{Aut}(\mathbb Q(\alpha)) = \{\operatorname{id}\}$
>
> Let $\alpha = \alpha_1$. In the Galois correspondence for $K/\mathbb Q$, the intermediate field $\mathbb Q(\alpha)$ corresponds to the subgroup of $S_n$ fixing $\alpha_1$:
> $$
> H = \operatorname{Gal}(K/\mathbb Q(\alpha)) = \{\sigma \in S_n : \sigma(1) = 1\} \cong S_{n-1}.
> $$
>
> By the general theory of Galois extensions, any $\mathbb Q$-automorphism of an intermediate field $E = K^H$ is induced by an element of the normalizer $N_G(H)$, and
> $$
> \operatorname{Aut}(E) \cong N_G(H) / H.
> $$
>
> We determine the normalizer $N_{S_n}(H)$:
> Let $g \in N_{S_n}(H)$. Then for every $h \in H$, we have $g^{-1} h g \in H$, which means
> $$
> (g^{-1} h g)(1) = 1 \implies h(g(1)) = g(1).
> $$
> Thus the element $g(1) \in \{1, \dots, n\}$ must be fixed by every permutation $h \in H$.
> The group $H$ is the full symmetric group on the letters $\{2, 3, \dots, n\}$. Since $n > 2$, the set $\{2, \dots, n\}$ contains at least two distinct elements, so no element in $\{2, \dots, n\}$ is fixed by every permutation in $H$.
> Therefore, the only element fixed by all of $H$ is $1$.
>
> This forces $g(1) = 1$, which means $g \in H$. Hence,
> $$
> N_{S_n}(H) = H.
> $$
> It follows that
> $$
> \operatorname{Aut}(\mathbb Q(\alpha)) \cong H / H = \{\operatorname{id}\}.
> $$
> Thus the only automorphism of $\mathbb Q(\alpha)$ is the identity.
>
> ---
>
> ### (c) $\alpha^n \notin \mathbb Q$ for $n \ge 4$
>
> Suppose, for contradiction, that $\alpha^n = c \in \mathbb Q$.
> Since $\alpha$ is a root of $X^n - c \in \mathbb Q[X]$ and $f(X)$ is the minimal polynomial of $\alpha$ over $\mathbb Q$ of degree $n$, we must have
> $$
> f(X) = X^n - c.
> $$
> The roots of $X^n - c$ in $\mathbb C$ are
> $$
> \alpha, \ \zeta_n \alpha, \ \zeta_n^2 \alpha, \ \dots, \ \zeta_n^{n-1} \alpha,
> $$
> where $\zeta_n = e^{2\pi i / n}$ is a primitive $n$-th root of unity.
> The splitting field of $f(X)$ over $\mathbb Q$ is therefore
> $$
> K = \mathbb Q(\alpha, \zeta_n).
> $$
> We bound the degree $[K : \mathbb Q]$ using the tower $\mathbb Q \subset \mathbb Q(\zeta_n) \subset K$:
> - The cyclotomic extension $\mathbb Q(\zeta_n)/\mathbb Q$ has degree $[\mathbb Q(\zeta_n) : \mathbb Q] = \varphi(n)$, where $\varphi$ is Euler's totient function.
> - Over $\mathbb Q(\zeta_n)$, $\alpha$ satisfies the polynomial $X^n - c$, so $[K : \mathbb Q(\zeta_n)] \le n$.
>
> Hence,
> $$
> [K : \mathbb Q] \le n \cdot \varphi(n).
> $$
> On the other hand, we are given that $\operatorname{Gal}(K/\mathbb Q) \cong S_n$, so
> $$
> [K : \mathbb Q] = |S_n| = n!
> $$
> Combining these gives
> $$
> n! \le n \cdot \varphi(n) \implies (n - 1)! \le \varphi(n).
> $$
> But $\varphi(n) < n$ for all $n > 1$, so this requires:
> $$
> (n - 1)! < n.
> $$
> We test this inequality for integers $n \ge 4$:
> - For $n = 4$: $(4 - 1)! = 3! = 6$, but $6 < 4$ is false.
> - For $n \ge 4$: $(n - 1)! = (n - 1)(n - 2) \dots 2 \cdot 1 \ge 3(n - 1) = 3n - 3 > n$.
>
> Thus $(n - 1)! > n$ for all $n \ge 4$, which contradicts $(n - 1)! \le \varphi(n) < n$.
> Therefore, $\alpha^n$ cannot belong to $\mathbb Q$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[05 - Galois Theory/Concepts/Fundamental Theorem|Fundamental Theorem of Galois Theory]]
- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[05 - Galois Theory/Concepts/Automorphisms|Automorphisms]]

## Notes

- **Routing:** Galois Theory is primary because symmetric Galois group properties, intermediate automorphism groups via normalizers, and radical degree bounds are foundational Galois theory.
- **Source status:** Serge Lang, *Algebra*, rev. 3rd ed., Ch. VI, Exercise 10, printed p. 322, PDF p. 337.
