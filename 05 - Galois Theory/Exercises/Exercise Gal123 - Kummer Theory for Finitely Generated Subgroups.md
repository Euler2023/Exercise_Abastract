---
title: "Exercise Gal123: Kummer Theory for Finitely Generated Subgroups"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - kummer-theory
  - abelian-extensions
  - commutator-subgroups
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 39, printed pp. 327-328, PDF pp. 342-343"
created: 2026-09-12
---

# Exercise Gal123: Kummer Theory for Finitely Generated Subgroups

## Problem Statement

> [!question]
> Let $K$ be a field of characteristic 0 for simplicity. Let $\Gamma$ be a finitely generated subgroup of $K^*$. Let $N$ be an *odd* positive integer. Assume that for each prime $p \mid N$ we have
> $$
> \Gamma = \Gamma^{1/p} \cap K,
> $$
> and also that $\operatorname{Gal}(K(\boldsymbol{\mu}_N)/K) \approx \mathbf{Z}(N)^*$. Prove the following:
> 
> (a) $\Gamma/\Gamma^N \approx \Gamma/(\Gamma \cap K^{*N}) \approx \Gamma K^{*N} / K^{*N}$.
> 
> (b) Let $K_N = K(\boldsymbol{\mu}_N)$. Then
> $$
> \Gamma \cap K_N^{*N} = \Gamma^N.
> $$
> 
> (c) Conclude that the natural Kummer map
> $$
> \Gamma/\Gamma^N \to \operatorname{Hom}(H_\Gamma(N), \boldsymbol{\mu}_N)
> $$
> is an isomorphism, where $H_\Gamma(N) = \operatorname{Gal}(K(\Gamma^{1/N}, \boldsymbol{\mu}_N)/K_N)$.
> 
> (d) Let $G_\Gamma(N) = \operatorname{Gal}(K(\Gamma^{1/N}, \boldsymbol{\mu}_N)/K)$. Then the commutator subgroup of $G_\Gamma(N)$ is $H_\Gamma(N)$, and in particular $\operatorname{Gal}(K_N/K)$ is the maximal abelian quotient of $G_\Gamma(N)$.

## Hints

> [!hint]- Weak Hint
> Follow the hint provided in the text for part (b): if an element $a \in \Gamma$ is not an $N$-th power in $\Gamma$, then for some prime $p \mid N$, $a$ is not a $p$-th power in $\Gamma$ (hence not in $K$), but becomes a $p$-th power in $K_N$.

> [!hint]- Moderate Hint
> For (b), consider the extension $K(\boldsymbol{\mu}_p, a^{1/p})/K$. Since $p$ is an odd prime and $\operatorname{Gal}(K(\boldsymbol{\mu}_p)/K) \cong (\mathbf{Z}/p\mathbf{Z})^*$, the Galois group of $K(\boldsymbol{\mu}_p, a^{1/p})$ over $K$ is non-abelian. But if $a^{1/p} \in K_N$, it would be a subfield of the abelian extension $K_N/K$, yielding a contradiction.

> [!hint]- Strong Hint
> - For (c), apply standard Kummer theory over the base field $K_N$ containing $\boldsymbol{\mu}_N$, where the Kummer group is $\Gamma K_N^{*N} / K_N^{*N} \cong \Gamma / (\Gamma \cap K_N^{*N})$.
> - For (d), compute the commutator $[\sigma, \tau]$ for $\tau \in H_\Gamma(N)$ and $\sigma \in G_\Gamma(N)$ acting on a generator $a^{1/N}$.

## Solution

> [!success]- Complete Derivation
> Let $K$ be a field of characteristic 0, $\Gamma \le K^*$ a finitely generated subgroup, and $N$ an odd positive integer.
>
> ---
>
> ### Part (a): The Isomorphism $\Gamma/\Gamma^N \cong \Gamma K^{*N}/K^{*N}$
> By the second isomorphism theorem for groups,
> $$
> \Gamma / (\Gamma \cap K^{*N}) \approx \Gamma K^{*N} / K^{*N}.
> $$
> It remains to show that $\Gamma \cap K^{*N} = \Gamma^N$.
> Clearly $\Gamma^N \subseteq \Gamma \cap K^{*N}$.
> Conversely, let $x \in \Gamma \cap K^{*N}$. Then $x = y^N$ for some $y \in K^*$.
> Since $x \in \Gamma$, $y \in K^*$ is an $N$-th root of an element of $\Gamma$, which means $y \in \Gamma^{1/N} \cap K$.
>
> We show by induction on the number of prime factors of $N$ (counted with multiplicity) that
> $$
> \Gamma^{1/N} \cap K = \Gamma.
> $$
> - If $N = p$ is prime, this is precisely the given hypothesis $\Gamma = \Gamma^{1/p} \cap K$.
> - For $N = p M$, let $y \in \Gamma^{1/N} \cap K$. Then $y^N = (y^M)^p \in \Gamma$.
>   Since $y \in K$, we have $y^M \in K$, so $y^M \in \Gamma^{1/p} \cap K = \Gamma$.
>   Then $y \in \Gamma^{1/M} \cap K = \Gamma$ by the induction hypothesis.
>
> Thus $y \in \Gamma$, which implies $x = y^N \in \Gamma^N$.
> Therefore, $\Gamma \cap K^{*N} = \Gamma^N$, establishing
> $$
> \Gamma/\Gamma^N \approx \Gamma/(\Gamma \cap K^{*N}) \approx \Gamma K^{*N}/K^{*N}.
> $$
>
> ---
>
> ### Part (b): Preservation of Powers in $K_N = K(\boldsymbol{\mu}_N)$
> Clearly $\Gamma^N \subseteq \Gamma \cap K_N^{*N}$.
> Suppose for contradiction that $\Gamma \cap K_N^{*N} \ne \Gamma^N$.
> Then there exists an element $x \in \Gamma$ such that $x \in K_N^{*N}$ but $x \notin \Gamma^N$.
>
> Since $\Gamma / \Gamma^N$ is an abelian group of exponent $N$, the failure of an element to be an $N$-th power implies that for some prime divisor $p \mid N$, there exists an element $a \in \Gamma$ such that:
> $$
> a \in K_N^{*p} \quad \text{but} \quad a \notin \Gamma^p.
> $$
> By part (a), $a \notin \Gamma^p \iff a \notin K^{*p}$.
> Thus $X^p - a$ has no root in $K$. Since $p$ is prime, $X^p - a$ is irreducible over $K$.
>
> Since $a \in K_N^{*p}$, there exists $b \in K_N$ such that $b^p = a$.
>
> 1. **Irreducibility over $K(\boldsymbol{\mu}_p)$:**
>    The cyclotomic extension $K(\boldsymbol{\mu}_p)/K$ is Galois with Galois group
>    $$
>    \operatorname{Gal}(K(\boldsymbol{\mu}_p)/K) \cong (\mathbf{Z}/p\mathbf{Z})^*,
>    $$
>    which has degree $[K(\boldsymbol{\mu}_p) : K] = p - 1$.
>    Since $\gcd(p, p - 1) = 1$, the degree of the irreducible polynomial $X^p - a$ is coprime to $[K(\boldsymbol{\mu}_p) : K]$.
>    Therefore, $X^p - a$ remains irreducible over $K(\boldsymbol{\mu}_p)$.
>    Consequently:
>    $$
>    [K(\boldsymbol{\mu}_p, a^{1/p}) : K(\boldsymbol{\mu}_p)] = p.
>    $$
>
> 2. **Non-Abelian Nature of the Extension:**
>    Let $L = K(\boldsymbol{\mu}_p, a^{1/p})$. This is the splitting field of $X^p - a$ over $K$.
>    Its degree over $K$ is
>    $$
>    [L : K] = [L : K(\boldsymbol{\mu}_p)] [K(\boldsymbol{\mu}_p) : K] = p(p - 1).
>    $$
>    The Galois group $G = \operatorname{Gal}(L/K)$ consists of pairs $(\sigma, \tau)$ acting on $\zeta_p$ and $a^{1/p}$:
>    $$
>    \sigma(\zeta_p) = \zeta_p^c \quad (c \in (\mathbf{Z}/p\mathbf{Z})^*), \quad \tau(a^{1/p}) = \zeta_p a^{1/p}.
>    $$
>    We compute the commutator:
>    $$
>    \sigma \tau \sigma^{-1}(a^{1/p}) = \sigma \tau(a^{1/p}) = \sigma(\zeta_p a^{1/p}) = \zeta_p^c a^{1/p} = \tau^c(a^{1/p}).
>    $$
>    Since $p$ is an **odd** prime, $p \ge 3$, so there exists $c \in (\mathbf{Z}/p\mathbf{Z})^*$ with $c \not\equiv 1 \pmod p$.
>    Then $\tau^c \ne \tau$, so $\sigma \tau \ne \tau \sigma$.
>    Thus $\operatorname{Gal}(L/K)$ is **non-abelian**.
>
> 3. **Contradiction:**
>    By hypothesis, $b = a^{1/p} \in K_N$.
>    Since $\boldsymbol{\mu}_p \subseteq \boldsymbol{\mu}_N \subset K_N$, the entire field $L = K(\boldsymbol{\mu}_p, a^{1/p})$ is a subfield of $K_N$:
>    $$
>    K \subseteq L \subseteq K_N.
>    $$
>    The extension $K_N/K$ is abelian because $\operatorname{Gal}(K_N/K) \cong (\mathbf{Z}/N\mathbf{Z})^*$ is an abelian group.
>    Every subfield of an abelian Galois extension is abelian over the base field!
>    Therefore, $L/K$ must be an abelian extension, which contradicts the fact that $\operatorname{Gal}(L/K)$ is non-abelian.
>
> This contradiction proves that no such prime $p$ exists.
> Hence:
> $$
> \Gamma \cap K_N^{*N} = \Gamma^N.
> $$
>
> ---
>
> ### Part (c): Kummer Isomorphism
> Over the field $K_N = K(\boldsymbol{\mu}_N)$, all $N$-th roots of unity are present.
> Let $E = K_N(\Gamma^{1/N}) = K(\Gamma^{1/N}, \boldsymbol{\mu}_N)$.
> By standard Kummer theory for exponent $N$, the extension $E/K_N$ is an abelian extension with Galois group
> $$
> H_\Gamma(N) = \operatorname{Gal}(E / K_N),
> $$
> and the Kummer pairing induces a canonical group isomorphism:
> $$
> \Gamma K_N^{*N} / K_N^{*N} \xrightarrow{\sim} \operatorname{Hom}(H_\Gamma(N), \boldsymbol{\mu}_N).
> $$
> By the second isomorphism theorem and part (b):
> $$
> \Gamma K_N^{*N} / K_N^{*N} \approx \Gamma / (\Gamma \cap K_N^{*N}) = \Gamma / \Gamma^N.
> $$
> Composing these isomorphisms gives the natural isomorphism:
> $$
> \Gamma / \Gamma^N \xrightarrow{\sim} \operatorname{Hom}(H_\Gamma(N), \boldsymbol{\mu}_N).
> $$
>
> ---
>
> ### Part (d): Commutator Subgroup of $G_\Gamma(N)$
> Let $G_\Gamma(N) = \operatorname{Gal}(E/K)$.
> In the tower of fields $K \subseteq K_N \subseteq E$:
> - $K_N/K$ is Galois and abelian with Galois group $\operatorname{Gal}(K_N/K) \cong (\mathbf{Z}/N\mathbf{Z})^*$.
> - $H_\Gamma(N) = \operatorname{Gal}(E/K_N)$ is the Galois group of $E$ over $K_N$.
>
> By the Galois correspondence, since $K_N/K$ is abelian, the commutator subgroup $[G_\Gamma(N), G_\Gamma(N)]$ must act trivially on $K_N$, which means:
> $$
> [G_\Gamma(N), G_\Gamma(N)] \subseteq \operatorname{Gal}(E/K_N) = H_\Gamma(N).
> $$
> To show the reverse inclusion $H_\Gamma(N) \subseteq [G_\Gamma(N), G_\Gamma(N)]$, let $\tau \in H_\Gamma(N)$ and $\sigma \in G_\Gamma(N)$.
> The automorphism $\sigma$ acts on $\boldsymbol{\mu}_N$ by $\sigma(\zeta) = \zeta^c$ for some $c \in (\mathbf{Z}/N\mathbf{Z})^*$.
> For any $a \in \Gamma$ and $\alpha = a^{1/N}$, $\tau(\alpha) = \zeta_a \alpha$ for some $\zeta_a \in \boldsymbol{\mu}_N$.
> Then:
> $$
> \sigma \tau \sigma^{-1}(\alpha) = \sigma(\tau(\sigma^{-1}(\alpha))) = \sigma\left(\zeta_a^{c^{-1}} \sigma^{-1}(\alpha)\right) = \zeta_a \alpha = \tau(\alpha).
> $$
> More specifically, the commutator $[\sigma, \tau] = \sigma \tau \sigma^{-1} \tau^{-1}$ acts on $\alpha$ by:
> $$
> [\sigma, \tau](\alpha) = \sigma \tau \sigma^{-1} (\zeta_a^{-1} \alpha) = \tau^c(\zeta_a^{-1} \alpha) = \zeta_a^{c - 1} \alpha = \tau^{c - 1}(\alpha).
> $$
> Since $N$ is odd, for each prime $p \mid N$, the group $(\mathbf{Z}/p^k\mathbf{Z})^*$ contains an element $c$ such that $c - 1$ is coprime to $p$. By the Chinese Remainder Theorem, we can choose $c \in (\mathbf{Z}/N\mathbf{Z})^*$ such that $\gcd(c - 1, N) = 1$.
> Since $\gcd(c - 1, N) = 1$, the map $\tau \mapsto \tau^{c - 1}$ is an automorphism of the abelian group $H_\Gamma(N)$ (whose exponent divides $N$).
> Therefore, every element of $H_\Gamma(N)$ can be written in the form $\tau^{c - 1} = [\sigma, \tau] \in [G_\Gamma(N), G_\Gamma(N)]$.
>
> This proves:
> $$
> [G_\Gamma(N), G_\Gamma(N)] = H_\Gamma(N).
> $$
> Finally, the maximal abelian quotient of $G_\Gamma(N)$ is:
> $$
> G_\Gamma(N) / [G_\Gamma(N), G_\Gamma(N)] = G_\Gamma(N) / H_\Gamma(N) \cong \operatorname{Gal}(K_N/K).
> $$

## Related Concepts

- [[05 - Galois Theory/Concepts/Kummer Extensions|Kummer Extensions]]
- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]
- [[01 - Group Theory/Concepts/Solvable Groups|Solvable Groups]]

## Notes

- The hypothesis that $N$ is odd is essential: for $p = 2$, $(\mathbf{Z}/2\mathbf{Z})^*$ is trivial, so the cyclotomic extension does not provide enough automorphisms to distinguish radical extensions, which leads to the well-known exception at 2 in Kummer theory.
