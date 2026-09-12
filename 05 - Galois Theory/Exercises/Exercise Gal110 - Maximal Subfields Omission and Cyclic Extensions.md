---
title: "Exercise Gal110: Maximal Subfields Omission and Cyclic Extensions"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - zorns-lemma
  - cyclic-extensions
  - galois-correspondence
  - artin-hole-digging
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 26, printed p. 325, PDF p. 340"
created: 2026-09-12
---

# Exercise Gal110: Maximal Subfields Omission and Cyclic Extensions

## Problem Statement

> [!question] Exercise VI.26
> Let $\mathbb Q^a$ be a fixed algebraic closure of $\mathbb Q$. Let $E$ be a maximal subfield of $\mathbb Q^a$ not containing $\sqrt{2}$ (such a subfield exists by Zorn's lemma). Show that every finite extension of $E$ is cyclic. (Your proof should work taking any algebraic irrational number instead of $\sqrt{2}$.)

## Hints

> [!hint]- Hint 1: The Unique Minimal Subfield
> By maximality of $E$, if $F$ is any subfield of $\mathbb Q^a$ strictly containing $E$, then $F$ must contain $\sqrt{2}$ (or the chosen element $\alpha$). What does this imply about the position of $E(\sqrt{2})$ in the subfield lattice?

> [!hint]- Hint 2: Subgroups in the Galois Closure
> Let $K/E$ be any finite extension, and let $N/E$ be its normal (Galois) closure. In the Galois group $G = \operatorname{Gal}(N/E)$, what corresponds to the fact that every non-trivial intermediate subfield contains $E(\sqrt{2})$?

> [!hint]- Hint 3: Groups with a Unique Maximal Subgroup
> If every proper subgroup of a finite group $G$ is contained in a single maximal subgroup $M$, choose an element $g \in G \setminus M$. Deduce that $G = \langle g \rangle$, so $G$ is cyclic.

## Solution

> [!success]- Solution
>
> Let $\alpha \in \mathbb Q^a \setminus \mathbb Q$ (for instance, $\alpha = \sqrt{2}$).
> Consider the family of subfields of $\mathbb Q^a$:
> $$
> \mathcal F = \{F \subseteq \mathbb Q^a \mid \alpha \notin F\}.
> $$
> The set $\mathcal F$ is non-empty because $\mathbb Q \in \mathcal F$.
> If $\mathcal C$ is a chain (totally ordered subset) in $\mathcal F$, its union $\bigcup_{F \in \mathcal C} F$ is a subfield of $\mathbb Q^a$ that does not contain $\alpha$, and hence is an upper bound in $\mathcal F$.
> By Zorn's lemma, $\mathcal F$ contains a maximal element $E$.
>
> ---
>
> ### 1. The Unique Minimal Extension of $E$
>
> By the maximality of $E$ in $\mathcal F$, any subfield $F \subseteq \mathbb Q^a$ that strictly contains $E$ cannot belong to $\mathcal F$, which means
> $$
> \alpha \in F \quad \text{for every subfield } F \supsetneq E.
> $$
> In particular,
> $$
> E(\alpha) \subseteq F \quad \text{for every subfield } F \supsetneq E.
> $$
> Thus, $E(\alpha)$ is the **unique minimal non-trivial extension** of $E$ in $\mathbb Q^a$.
>
> Because there are no intermediate subfields strictly between $E$ and $E(\alpha)$, the extension degree $[E(\alpha) : E]$ must be a prime number $p$.
> *(For $\alpha = \sqrt{2}$, $\alpha^2 = 2 \in E$, so $[E(\sqrt{2}) : E] = 2$.)*
>
> ---
>
> ### 2. Galois Closures and Maximal Subgroups
>
> Let $K/E$ be any non-trivial finite extension in $\mathbb Q^a$.
> Since characteristic is 0, $K/E$ is separable. Let $N/E$ be the Galois closure of $K/E$ in $\mathbb Q^a$.
> Then $N/E$ is a finite Galois extension. Let
> $$
> G = \operatorname{Gal}(N/E).
> $$
>
> Because $N \supsetneq E$, $N$ contains $E(\alpha)$.
> Under the Galois correspondence for $N/E$:
> - Intermediate fields $E \subseteq F \subseteq N$ correspond bijectively to subgroups $H = \operatorname{Gal}(N/F) \le G$;
> - Inclusions are reversed: $E \subsetneq F \iff H \subsetneq G$;
> - The condition that every non-trivial intermediate field $F \supsetneq E$ contains $E(\alpha)$ translates to:
>   $$
>   \text{every proper subgroup } H < G \text{ is contained in } M = \operatorname{Gal}(N/E(\alpha)).
>   $$
>
> Consequently, $M$ is the **unique maximal subgroup** of $G$.
>
> ---
>
> ### 3. A Finite Group with a Unique Maximal Subgroup is Cyclic
>
> Let $G$ be a finite group having a unique maximal subgroup $M < G$.
> Since $M$ is a proper subgroup, the set $G \setminus M$ is non-empty.
> Choose any element
> $$
> g \in G \setminus M.
> $$
> Consider the cyclic subgroup $\langle g \rangle \le G$.
> - If $\langle g \rangle \neq G$, then $\langle g \rangle$ is a proper subgroup of $G$.
> - In any finite group, every proper subgroup is contained in at least one maximal subgroup.
> - But $M$ is the *only* maximal subgroup of $G$, so this would imply $\langle g \rangle \le M$, which contradicts $g \notin M$.
>
> Therefore, we must have
> $$
> \langle g \rangle = G.
> $$
> This proves that $G$ is a **cyclic group** (and in fact, a cyclic $p$-group of order $p^k$, since its unique maximal subgroup $M$ has index $p$).
>
> ---
>
> ### Conclusion
>
> The Galois closure $N/E$ has a cyclic Galois group:
> $$
> \operatorname{Gal}(N/E) \cong \mathbb Z/p^k\mathbb Z.
> $$
> Because $K$ is an intermediate field $E \subseteq K \subseteq N$, the Galois group $\operatorname{Gal}(N/K)$ is a subgroup of the cyclic group $G$.
> Since any quotient of a cyclic group is cyclic,
> $$
> \operatorname{Gal}(K/E) \cong G / \operatorname{Gal}(N/K)
> $$
> is a finite cyclic group.
>
> Therefore, every finite extension of $E$ is cyclic.

## Related Concepts

- [[05 - Galois Theory/Concepts/Cyclic Extensions|Cyclic Extensions]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[05 - Galois Theory/Concepts/Fundamental Theorem|Fundamental Theorem of Galois Theory]]
- [[05 - Galois Theory/Exercises/Exercise Gal109 - Cyclic Absolute Galois Group and Topological Generation|Exercise Gal109]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]

## Notes

- **Routing:** Galois Theory is primary because Emil Artin's "hole digging" technique relies on the Galois correspondence and the classification of groups with a unique maximal subgroup.
- **Source status:** Serge Lang, *Algebra*, rev. 3rd ed., Ch. VI, Exercise 26, printed p. 325, PDF p. 340.
