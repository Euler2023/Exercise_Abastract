---
title: "Exercise Gal92: Biquadratic Quartic Polynomials and Dihedral Galois Groups"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - dihedral-group
  - quartic-polynomials
  - subfield-lattice
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 8, printed p. 322, PDF p. 337"
created: 2026-09-12
---

# Exercise Gal92: Biquadratic Quartic Polynomials and Dihedral Galois Groups

## Problem Statement

> [!question] Exercise VI.8
> Let $f(X) = X^4 + aX^2 + b$ be an irreducible polynomial over $\mathbb Q$, with roots $\pm \alpha, \pm \beta$, and splitting field $K$.
>
> (a) Show that $\operatorname{Gal}(K/\mathbb Q)$ is isomorphic to a subgroup of $D_8$ (the non-abelian group of order 8 other than the quaternion group), and thus is isomorphic to one of the following:
> (i) $\mathbb Z/4\mathbb Z$
> (ii) $\mathbb Z/2\mathbb Z \times \mathbb Z/2\mathbb Z$
> (iii) $D_8$.
>
> (b) Show that the first case happens if and only if
> $$
> \frac{\alpha}{\beta} - \frac{\beta}{\alpha} \in \mathbb Q.
> $$
> Case (ii) happens if and only if $\alpha\beta \in \mathbb Q$ or $\alpha^2 - \beta^2 \in \mathbb Q$. Case (iii) happens otherwise. *(Actually, in (ii), the case $\alpha^2 - \beta^2 \in \mathbb Q$ cannot occur. It corresponds to a subgroup $D_8 \subset S_4$ which is isomorphic to $\mathbb Z/2\mathbb Z \times \mathbb Z/2\mathbb Z$, but is not transitive on $\{1, 2, 3, 4\}$.)*
>
> (c) Find the splitting field $K$ in $\mathbb C$ of the polynomial
> $$
> X^4 - 4X^2 - 1.
> $$
> Determine the Galois group of this splitting field over $\mathbb Q$, and describe fully the lattices of subfields and of subgroups of the Galois group.

## Hints

> [!hint]- Hint 1: Permutations Preserving Opposite Pairs
> The four roots partition into two pairs of opposites: $\{\alpha, -\alpha\}$ and $\{\beta, -\beta\}$. Any automorphism must map opposites to opposites, embedding $\operatorname{Gal}(K/\mathbb Q)$ into the wreath product $S_2 \wr S_2 \cong D_8$. Transitivity on the four roots restricts the possible subgroups to transitive ones.

> [!hint]- Hint 2: Invariants for Cases (i) and (ii)
> Consider the quantity $\theta = \frac{\alpha}{\beta} - \frac{\beta}{\alpha} = \frac{\alpha^2 - \beta^2}{\alpha\beta}$. Show that a 4-cycle generator of $C_4$ in $D_8$ negates both $\alpha^2 - \beta^2$ and $\alpha\beta$, leaving their ratio invariant. For Case (ii), consider the intermediate quadratic field $\mathbb Q(\alpha\beta) = \mathbb Q(\sqrt{b})$.

> [!hint]- Hint 3: Part (c) Calculations
> For $X^4 - 4X^2 - 1$, set $Y = X^2$ to find $Y = 2 \pm \sqrt{5}$. Show $\alpha\beta = i$, so $K = \mathbb Q(\sqrt{2+\sqrt{5}}, i)$, and verify $[K:\mathbb Q] = 8$.

## Solution

> [!success]- Solution
>
> ### (a) $\operatorname{Gal}(K/\mathbb Q)$ is a Subgroup of $D_8$
>
> Let the roots of $f(X)$ be labelled as:
> $$
> r_1 = \alpha, \quad r_2 = \beta, \quad r_3 = -\alpha, \quad r_4 = -\beta.
> $$
> Any $\sigma \in \operatorname{Gal}(K/\mathbb Q)$ is a permutation of $\{r_1, r_2, r_3, r_4\}$. Because $f(X)$ contains only even powers of $X$, the roots come in opposite pairs: $r_1 + r_3 = 0$ and $r_2 + r_4 = 0$.
>
> Since $\sigma$ is a field automorphism fixing $\mathbb Q$, it preserves additive relations:
> $$
> \sigma(r_i) + \sigma(r_j) = 0 \iff r_i + r_j = 0.
> $$
> Thus $\sigma$ must preserve the partition of roots into two pairs of opposites:
> $$
> \mathcal P = \{\{\alpha, -\alpha\}, \{\beta, -\beta\}\}.
> $$
> The subgroup of the symmetric group $S_4$ preserving this partition is the centralizer of the double transposition $(13)(24)$, which is the dihedral group of order 8:
> $$
> D_8 = \langle (1234), (13) \rangle \subset S_4.
> $$
>
> Because $f(X)$ is irreducible over $\mathbb Q$, $\operatorname{Gal}(K/\mathbb Q)$ acts transitively on the 4 roots. Therefore, $[K:\mathbb Q]$ is a multiple of 4 dividing 8. The only transitive subgroups of $D_8$ on 4 letters are:
> 1. The cyclic group of order 4: $\mathbb Z/4\mathbb Z = \langle (1234) \rangle$;
> 2. The Klein four-group: $V_4 = \{1, (13)(24), (12)(34), (14)(23)\} \cong \mathbb Z/2\mathbb Z \times \mathbb Z/2\mathbb Z$;
> 3. The full dihedral group $D_8$ of order 8.
>
> This proves (a).
>
> ---
>
> ### (b) Conditions for Cases (i), (ii), and (iii)
>
> Notice that $\alpha^2 + \beta^2 = -a \in \mathbb Q$ and $\alpha^2 \beta^2 = b \in \mathbb Q$, so $\alpha\beta = \pm \sqrt{b}$.
> The discriminant of the quadratic $Y^2 + aY + b$ is
> $$
> (\alpha^2 - \beta^2)^2 = (\alpha^2 + \beta^2)^2 - 4\alpha^2\beta^2 = a^2 - 4b.
> $$
>
> **Analysis of Case (ii): $\operatorname{Gal}(K/\mathbb Q) \cong \mathbb Z/2\mathbb Z \times \mathbb Z/2\mathbb Z$:**
> In this case, $[K:\mathbb Q] = 4$, so $K = \mathbb Q(\alpha)$. Since $\pm \beta \in K$, we must have $\beta \in \mathbb Q(\alpha)$.
> As noted in the exercise statement:
> - If $\alpha^2 - \beta^2 \in \mathbb Q$, then $\alpha^2 = \frac{1}{2}(-a + (\alpha^2 - \beta^2)) \in \mathbb Q$, meaning $X^2 - \alpha^2 \in \mathbb Q[X]$ divides $f(X)$, contradicting the irreducibility of $f(X)$. Thus $\alpha^2 - \beta^2 \notin \mathbb Q$.
> - Hence Case (ii) occurs if and only if $\alpha\beta \in \mathbb Q$, which is equivalent to $b = (\alpha\beta)^2 \in \mathbb Q^2$. In that case, $\beta = (\alpha\beta)/\alpha \in \mathbb Q(\alpha)$, and the Galois group is generated by the two commuting commuting involutions $\alpha \mapsto -\alpha$ and $\alpha \mapsto \beta = \sqrt{b}/\alpha$.
>
> **Analysis of Case (i): $\operatorname{Gal}(K/\mathbb Q) \cong \mathbb Z/4\mathbb Z$:**
> Consider the element
> $$
> \theta = \frac{\alpha}{\beta} - \frac{\beta}{\alpha} = \frac{\alpha^2 - \beta^2}{\alpha\beta}.
> $$
> - If $\operatorname{Gal}(K/\mathbb Q) = \langle \sigma \rangle \cong \mathbb Z/4\mathbb Z$, the generator $\sigma$ acts on the roots as the 4-cycle $(1234)$:
>   $$
>   \sigma(\alpha) = \beta, \quad \sigma(\beta) = -\alpha.
>   $$
>   Applying $\sigma$ to $\alpha^2 - \beta^2$ and $\alpha\beta$:
>   $$
>   \sigma(\alpha^2 - \beta^2) = \beta^2 - (-\alpha)^2 = \beta^2 - \alpha^2 = -(\alpha^2 - \beta^2),
>   $$
>   $$
>   \sigma(\alpha\beta) = \beta(-\alpha) = -\alpha\beta.
>   $$
>   Therefore,
>   $$
>   \sigma(\theta) = \frac{\sigma(\alpha^2 - \beta^2)}{\sigma(\alpha\beta)} = \frac{-(\alpha^2 - \beta^2)}{-\alpha\beta} = \theta.
>   $$
>   Since $\sigma$ generates the entire Galois group, $\theta$ is fixed by $\operatorname{Gal}(K/\mathbb Q)$, which implies $\theta \in \mathbb Q$.
>
> - Conversely, if $\theta \in \mathbb Q$, then $\theta \neq 0$ (since $\alpha^2 \neq \beta^2$). Furthermore,
>   $$
>   \theta^2 = \frac{(\alpha^2 - \beta^2)^2}{\alpha^2\beta^2} = \frac{a^2 - 4b}{b} \in \mathbb Q^2 \implies (a^2 - 4b)b \in \mathbb Q^2.
>   $$
>   By [[05 - Galois Theory/Exercises/Exercise Gal88 - Kummer-Type Criterion for Degree Four Cyclic Extensions|Exercise Gal88]], this condition guarantees that $\mathbb Q(\alpha)/\mathbb Q$ is a cyclic extension of degree 4.
>
> **Case (iii):** By elimination, if neither $\theta \in \mathbb Q$ nor $\alpha\beta \in \mathbb Q$, then $\operatorname{Gal}(K/\mathbb Q)$ must be the full dihedral group $D_8$.
>
> ---
>
> ### (c) The Polynomial $X^4 - 4X^2 - 1$
>
> Setting $Y = X^2$, the resolvent quadratic is $Y^2 - 4Y - 1 = 0$, with roots:
> $$
> Y_{1,2} = \frac{4 \pm \sqrt{16 + 4}}{2} = 2 \pm \sqrt{5}.
> $$
> Thus $Y_1 = 2 + \sqrt{5} > 0$ and $Y_2 = 2 - \sqrt{5} < 0$.
> The four complex roots of $f(X)$ are:
> $$
> \alpha = \sqrt{2 + \sqrt{5}} \in \mathbb R, \quad -\alpha, \quad \beta = i\sqrt{\sqrt{5} - 2}, \quad -\beta.
> $$
> Note that
> $$
> \alpha \beta = \sqrt{2+\sqrt{5}} \cdot i\sqrt{\sqrt{5}-2} = i\sqrt{(2+\sqrt{5})(\sqrt{5}-2)} = i\sqrt{5 - 4} = i.
> $$
> Therefore, $\beta = i/\alpha$.
> The splitting field is
> $$
> K = \mathbb Q(\alpha, \beta) = \mathbb Q(\alpha, i) = \mathbb Q(\sqrt{2+\sqrt{5}}, i).
> $$
>
> 1. **Galois Group:**
>    - $b = -1 \notin \mathbb Q^2$, so Case (ii) does not hold.
>    - $(a^2 - 4b)b = (16 + 4)(-1) = -20 \notin \mathbb Q^2$, so Case (i) does not hold.
>    - Therefore, the Galois group is
>      $$
>      \operatorname{Gal}(K/\mathbb Q) \cong D_8.
>      $$
>
> 2. **Subgroup and Subfield Lattices:**
>    Let $\sigma = (1234)$ and $\tau = (24)$ be generators of $D_8$:
>    $$
>    \sigma: \alpha \mapsto \frac{i}{\alpha}, \quad i \mapsto -i; \qquad \tau: \alpha \mapsto \alpha, \quad i \mapsto -i \quad (\text{complex conjugation}).
>    $$
>
>    - **Subfields of degree 2 (corresponding to 3 subgroups of index 2 in $D_8$):**
>      1. Fixed by $\langle \sigma \rangle \cong C_4$: $\mathbb Q(\sqrt{5})$;
>      2. Fixed by $\langle \sigma^2, \tau \rangle \cong V_4$: $\mathbb Q(i)$;
>      3. Fixed by $\langle \sigma^2, \sigma\tau \rangle \cong V_4$: $\mathbb Q(\sqrt{-5})$.
>
>    - **Subfields of degree 4 (corresponding to 5 subgroups of order 2 in $D_8$):**
>      1. Fixed by $\langle \tau \rangle$: $\mathbb Q(\alpha) = \mathbb Q(\sqrt{2+\sqrt{5}})$ (real quartic field);
>      2. Fixed by $\langle \sigma^2 \tau \rangle$: $\mathbb Q(\beta) = \mathbb Q(i\sqrt{\sqrt{5}-2})$;
>      3. Fixed by $\langle \sigma \tau \rangle$: $\mathbb Q((\alpha+\beta)/\sqrt{2})$;
>      4. Fixed by $\langle \sigma^3 \tau \rangle$: $\mathbb Q((\alpha-\beta)/\sqrt{2})$;
>      5. Fixed by the center $\langle \sigma^2 \rangle$: $\mathbb Q(\sqrt{5}, i)$ (the unique biquadratic Galois subfield of degree 4).

## Related Concepts

- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[05 - Galois Theory/Concepts/Fundamental Theorem|Fundamental Theorem of Galois Theory]]
- [[05 - Galois Theory/Concepts/Quartic Resolvents and Galois Groups|Quartic Resolvents and Galois Groups]]
- [[05 - Galois Theory/Exercises/Exercise Gal88 - Kummer-Type Criterion for Degree Four Cyclic Extensions|Exercise Gal88]]

## Notes

- **Routing:** Galois Theory is primary because classifying quartic Galois groups and mapping subgroup/subfield lattices is a core Galois-theoretic calculation.
- **Source status:** Serge Lang, *Algebra*, rev. 3rd ed., Ch. VI, Exercise 8, printed p. 322, PDF p. 337.
