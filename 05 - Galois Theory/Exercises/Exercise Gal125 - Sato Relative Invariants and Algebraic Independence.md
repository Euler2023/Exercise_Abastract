---
title: "Exercise Gal125: Sato Relative Invariants and Algebraic Independence"
topic: galois-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - galois-theory
  - relative-invariants
  - artin-characters
  - algebraic-independence
  - polynomial-rings
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 41, printed p. 328, PDF p. 343"
created: 2026-09-12
---

# Exercise Gal125: Sato Relative Invariants and Algebraic Independence

## Problem Statement

> [!question]
> **Relative invariants (Sato).** Let $k$ be a field and $K$ an extension of $k$. Let $G$ be a group of automorphisms of $K$ over $k$, and assume that $k$ is the fixed field of $G$. (We do not assume that $K$ is algebraic over $k$.) By a **relative invariant** of $G$ in $K$ we shall mean an element $P \in K, P \ne 0$, such that for each $\sigma \in G$ there exists an element $\chi(\sigma) \in k$ for which
> $$
> P^\sigma = \chi(\sigma) P.
> $$
> Since $\sigma$ is an automorphism, we have $\chi(\sigma) \in k^*$. We say that the map $\chi: G \to k^*$ **belongs to** $P$, and call it a **character**. Prove the following statements:
> 
> (a) The map $\chi$ above is a homomorphism.
> 
> (b) If the same character $\chi$ belongs to relative invariants $P$ and $Q$ then there exists $c \in k^*$ such that $P = c Q$.
> 
> (c) The relative invariants form a multiplicative group, which we denote by $I$. Elements $P_1, \dots, P_m$ of $I$ are called multiplicatively independent $\operatorname{mod} k^*$ if their images in the factor group $I/k^*$ are multiplicatively independent, i.e. if given integers $v_1, \dots, v_m$ such that
> $$
> P_1^{v_1} \cdots P_m^{v_m} = c \in k^*,
> $$
> then $v_1 = \dots = v_m = 0$.
> 
> (d) If $P_1, \dots, P_m$ are multiplicatively independent $\operatorname{mod} k^*$ prove that they are algebraically independent over $k$. [Hint: Use Artin's theorem on characters.]
> 
> (e) Assume that $K = k(X_1, \dots, X_n)$ is the quotient field of the polynomial ring $k[X_1, \dots, X_n] = k[X]$, and assume that $G$ induces an automorphism of the polynomial ring. Prove: If $F_1(X)$ and $F_2(X)$ are relative invariant polynomials, then their g.c.d. is relative invariant. If $P(X) = F_1(X)/F_2(X)$ is a relative invariant, and is the quotient of two relatively prime polynomials, then $F_1(X)$ and $F_2(X)$ are relative invariants. Prove that the relative invariant polynomials generate $I/k^*$. Let $S$ be the set of relative invariant polynomials which cannot be factored into a product of two relative invariant polynomials of degrees $\ge 1$. Show that the elements of $S/k^*$ are multiplicatively independent, and hence that $I/k^*$ is a free abelian group. [If you know about transcendence degree, then using (d) you can conclude that this group is finitely generated.]

## Hints

> [!hint]- Weak Hint
> Follow the algebraic properties step by step: evaluate $(\sigma \tau)$ on $P$ using associativity of automorphisms, and consider quotients $P/Q$.

> [!hint]- Moderate Hint
> - For (d), suppose a polynomial relation $\sum c_\alpha P^\alpha = 0$ holds. Show that distinct monomial expressions $P^\alpha = P_1^{v_1} \cdots P_m^{v_m}$ have distinct characters $\chi^\alpha = \chi_1^{v_1} \cdots \chi_m^{v_m}$. Then apply Artin's theorem on the linear independence of distinct characters.
> - For (e), use unique factorization in $k[X_1, \dots, X_n]$ and Gauss's lemma.

> [!hint]- Strong Hint
> In (e), unique factorization into irreducible elements in the UFD $k[X]$ ensures that any relative invariant polynomial decomposes into irreducibles whose orbits under $G$ are preserved up to scalar multiples. Since the transcendence degree of $k(X_1, \dots, X_n)/k$ is $n$, any set of algebraically independent elements has size at most $n$, bounding the rank of $I/k^*$.

## Solution

> [!success]- Complete Derivation
> Let $K/k$ be a field extension and $G \le \operatorname{Aut}_k(K)$ with fixed field $K^G = k$.
>
> ---
>
> ### Part (a): $\chi$ is a Homomorphism
> Let $P \in K^*$ be a relative invariant with character $\chi: G \to k^*$, so $P^\sigma = \chi(\sigma) P$ for all $\sigma \in G$.
> Let $\sigma, \tau \in G$. Since $\tau$ acts as a field automorphism fixing $k$, and $\chi(\sigma) \in k$, we compute:
> $$
> P^{\sigma \tau} = (P^\sigma)^\tau = (\chi(\sigma) P)^\tau = \tau(\chi(\sigma)) P^\tau = \chi(\sigma) (\chi(\tau) P) = (\chi(\sigma) \chi(\tau)) P.
> $$
> On the other hand, by definition of the character:
> $$
> P^{\sigma \tau} = \chi(\sigma \tau) P.
> $$
> Since $P \ne 0$, we can cancel $P$ to obtain:
> $$
> \chi(\sigma \tau) = \chi(\sigma) \chi(\tau).
> $$
> Thus $\chi: G \to k^*$ is a group homomorphism.
>
> ---
>
> ### Part (b): Character Determines Relative Invariant up to Scalar
> Let $P$ and $Q$ be two relative invariants belonging to the same character $\chi$:
> $$
> P^\sigma = \chi(\sigma) P, \quad Q^\sigma = \chi(\sigma) Q \quad \text{for all } \sigma \in G.
> $$
> Consider their quotient $u = P/Q \in K^*$:
> $$
> u^\sigma = \left(\frac{P}{Q}\right)^\sigma = \frac{P^\sigma}{Q^\sigma} = \frac{\chi(\sigma) P}{\chi(\sigma) Q} = \frac{P}{Q} = u.
> $$
> Thus $u^\sigma = u$ for all $\sigma \in G$, meaning $u \in K^G$.
> Since $K^G = k$ by hypothesis, we have $u = c \in k^*$, so:
> $$
> P = c Q.
> $$
>
> ---
>
> ### Part (c): The Multiplicative Group of Relative Invariants
> - **Closure:** If $P, Q \in I$ with characters $\chi_P, \chi_Q$, then
>   $$
>   (PQ)^\sigma = P^\sigma Q^\sigma = \chi_P(\sigma) P \cdot \chi_Q(\sigma) Q = (\chi_P(\sigma) \chi_Q(\sigma)) PQ.
>   $$
>   Since $\chi_P(\sigma) \chi_Q(\sigma) \in k^*$, $PQ \in I$ with character $\chi_P \chi_Q$.
> - **Inverses:** For $P \in I$,
>   $$
>   (P^{-1})^\sigma = (P^\sigma)^{-1} = (\chi_P(\sigma) P)^{-1} = \chi_P(\sigma)^{-1} P^{-1}.
>   $$
>   Thus $P^{-1} \in I$ with character $\chi_P^{-1}$.
> - **Identity:** $1^\sigma = 1 = 1 \cdot 1$, so $1 \in I$ with trivial character.
>
> Thus $I$ is a subgroup of $K^*$.
> The map $\Psi: I \to \operatorname{Hom}(G, k^*)$ defined by $P \mapsto \chi_P$ is a group homomorphism.
> Its kernel consists of all $P \in I$ such that $\chi_P \equiv 1$, meaning $P^\sigma = P$ for all $\sigma \in G$.
> By hypothesis, $K^G = k$, so $\ker(\Psi) = k^*$.
> Therefore, $I/k^*$ embeds injectively into the abelian group $\operatorname{Hom}(G, k^*)$:
> $$
> I/k^* \hookrightarrow \operatorname{Hom}(G, k^*).
> $$
> In particular, $I/k^*$ is an abelian group.
>
> ---
>
> ### Part (d): Algebraic Independence of Multiplicatively Independent Invariants
> Let $P_1, \dots, P_m \in I$ be multiplicatively independent mod $k^*$.
> Suppose for contradiction that $P_1, \dots, P_m$ are algebraically dependent over $k$.
> Then there exists a non-trivial polynomial relation:
> $$
> \sum_{v \in \mathcal{A}} c_v P_1^{v_1} \cdots P_m^{v_m} = 0,
> $$
> where $\mathcal{A} \subset \mathbf{Z}_{\ge 0}^m$ is a finite non-empty set of distinct multi-indices $v = (v_1, \dots, v_m)$, and each coefficient $c_v \in k$ is non-zero.
>
> For each $v \in \mathcal{A}$, let $M_v = P_1^{v_1} \cdots P_m^{v_m} \in I$.
> The element $M_v$ is a relative invariant with character:
> $$
> \chi_v = \chi_1^{v_1} \cdots \chi_m^{v_m}: G \to k^*.
> $$
>
> - **The characters $\chi_v$ are pairwise distinct:**
>   If $\chi_v = \chi_w$ for $v \ne w$, then by part (b), the relative invariants $M_v$ and $M_w$ have the same character, so there exists $c \in k^*$ such that:
>   $$
>   M_v = c M_w \implies P_1^{v_1 - w_1} \cdots P_m^{v_m - w_m} = c \in k^*.
>   $$
>   Since $P_1, \dots, P_m$ are multiplicatively independent mod $k^*$, this forces $v_j - w_j = 0$ for all $j$, so $v = w$, a contradiction.
>   Thus the characters $\{\chi_v \mid v \in \mathcal{A}\}$ are all distinct characters from $G$ into $K^*$.
>
> - **Application of Artin's Theorem on Characters:**
>   By Artin's theorem on the linear independence of distinct characters (Theorem 4.1 in Lang, Ch. VI §4), the distinct characters $\{\chi_v \mid v \in \mathcal{A}\}$ are linearly independent over $K$.
>   Applying any $\sigma \in G$ to the relation $\sum_{v \in \mathcal{A}} c_v M_v = 0$:
>   $$
>   \sum_{v \in \mathcal{A}} c_v M_v^\sigma = \sum_{v \in \mathcal{A}} c_v \chi_v(\sigma) M_v = 0.
>   $$
>   Rewriting this as:
>   $$
>   \sum_{v \in \mathcal{A}} (c_v M_v) \chi_v(\sigma) = 0 \quad \text{for all } \sigma \in G.
>   $$
>   Since the characters $\chi_v$ are linearly independent over $K$, all the coefficients in $K$ must vanish:
>   $$
>   c_v M_v = 0 \quad \text{for all } v \in \mathcal{A}.
>   $$
>   Since $c_v \in k^*$ and $M_v \in K^*$, $c_v M_v \ne 0$, which is an immediate contradiction.
>
> Therefore, $P_1, \dots, P_m$ are **algebraically independent** over $k$.
>
> ---
>
> ### Part (e): The Case $K = k(X_1, \dots, X_n)$
> Let $R = k[X_1, \dots, X_n]$ be the polynomial ring, and assume $G$ acts as automorphisms of $R$.
>
> 1. **G.C.D. of Relative Invariant Polynomials:**
>    Let $F_1, F_2 \in R$ be relative invariant polynomials with characters $\chi_1, \chi_2$.
>    Let $D = \gcd(F_1, F_2) \in R$.
>    Since $\sigma \in G$ is an automorphism of $R$, it preserves divisibility and associates:
>    $$
>    \sigma(D) = \gcd(\sigma(F_1), \sigma(F_2)) = \gcd(\chi_1(\sigma) F_1, \chi_2(\sigma) F_2) = \gcd(F_1, F_2) = D \pmod{k^*}.
>    $$
>    Thus $\sigma(D) = \chi_D(\sigma) D$ for some $\chi_D(\sigma) \in k^*$. Hence $D$ is a relative invariant polynomial.
>
> 2. **Coprime Factors of a Relative Invariant:**
>    Let $P = F_1/F_2 \in I$ with $F_1, F_2 \in R$ coprime.
>    Then for each $\sigma \in G$:
>    $$
>    \frac{\sigma(F_1)}{\sigma(F_2)} = \sigma(P) = \chi(\sigma) \frac{F_1}{F_2} \implies F_2 \sigma(F_1) = \chi(\sigma) F_1 \sigma(F_2).
>    $$
>    Since $\gcd(F_1, F_2) = 1$, $F_1$ must divide $F_2 \sigma(F_1)$, so $F_1 \mid \sigma(F_1)$.
>    Since $\deg(\sigma(F_1)) = \deg(F_1)$, we have $\sigma(F_1) = c_1(\sigma) F_1$ for some $c_1(\sigma) \in k^*$.
>    Similarly, $\sigma(F_2) = c_2(\sigma) F_2$.
>    Thus both $F_1$ and $F_2$ are relative invariant polynomials.
>
> 3. **Generation of $I/k^*$:**
>    Every element of $I$ is of the form $P = F_1/F_2$ with $\gcd(F_1, F_2) = 1$. By the preceding step, $F_1$ and $F_2$ are relative invariant polynomials.
>    Thus $P \equiv F_1 F_2^{-1} \pmod{k^*}$, so the relative invariant polynomials generate $I/k^*$.
>
> 4. **Free Abelian Group Structure:**
>    Let $S$ be the set of relative invariant polynomials of degree $\ge 1$ that cannot be factored into two relative invariant polynomials of degree $\ge 1$.
>    By induction on degree, every relative invariant polynomial factors into a product of elements of $S$ and a constant in $k^*$.
>
>    Suppose $Q_1^{v_1} \cdots Q_r^{v_r} = c \in k^*$ with $Q_j \in S$ pairwise non-associate and $v_j \in \mathbf{Z}$.
>    Separating positive and negative exponents:
>    $$
>    \prod_{v_j > 0} Q_j^{v_j} = c \prod_{v_k < 0} Q_k^{-v_k}.
>    $$
>    In the UFD $R$, each $Q_j$ is a product of irreducible polynomials whose $G$-orbit of divisors is stable.
>    Since elements of $S$ cannot be factored into smaller relative invariants, two elements of $S$ either have no common factor of degree $\ge 1$ or are associates (i.e. differ by a factor in $k^*$).
>    Thus by unique factorization in $R$, no cancellation between distinct elements of $S/k^*$ can occur, which forces all $v_j = 0$.
>    Therefore, $S/k^*$ is a basis for $I/k^*$, and
>    $$
>    I/k^* \cong \bigoplus_{Q \in S/k^*} \mathbf{Z}
>    $$
>    is a **free abelian group**.
>
> 5. **Finite Generation:**
>    By part (d), any set of elements of $I$ that are multiplicatively independent mod $k^*$ is algebraically independent over $k$.
>    Since $K = k(X_1, \dots, X_n)$ has transcendence degree $n$ over $k$, the maximum number of algebraically independent elements in $K$ over $k$ is $n$.
>    Therefore, any set of multiplicatively independent elements in $I/k^*$ has size at most $n$.
>    Since $I/k^*$ is a free abelian group, its rank must satisfy
>    $$
>    \operatorname{rank}(I/k^*) \le n < \infty.
>    $$
>    Hence $I/k^*$ is a **finitely generated free abelian group**.

## Related Concepts

- [[05 - Galois Theory/Concepts/Automorphisms|Automorphisms]]
- [[05 - Galois Theory/Concepts/Fixed Fields|Fixed Fields]]
- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[03 - Field Theory/Concepts/Algebraic and Transcendental Elements|Algebraic and Transcendental Elements]]

## Notes

- Mikio Sato introduced relative invariants in the context of prehomogeneous vector spaces, where the polynomial invariants with non-trivial characters determine the geometry of the complement of the open dense orbit.
- The fact that $I/k^*$ is free abelian of rank bounded by the transcendence degree is a fundamental result in Sato-Kimura theory and geometric invariant theory.
