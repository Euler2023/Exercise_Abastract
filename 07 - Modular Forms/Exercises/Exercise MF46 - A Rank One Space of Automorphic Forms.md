---
title: "Exercise MF46: A Rank One Space of Automorphic Forms"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.5, Exercise 3.5.1, printed p. 88, PDF p. 102"
source_refs:
  - "S7/ch-3/sec-5/ex-1"
created: 2026-10-28
---

# Exercise MF46: A Rank One Space of Automorphic Forms

## Problem Statement

> [!question] Original Exercise 3.5.1
> Show that $A_k(\Gamma)=\mathbb C(X(\Gamma))f$ for any nonzero $f\in A_k(\Gamma)$.

## Hints

> [!hint]- Hint 1
> Divide an arbitrary weight-$k$ form by $f$.

> [!hint]- Hint 2
> At a cusp, cancel the identical automorphy factors before taking Laurent quotients.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Let $g\in A_k(\Gamma)$. The quotient $g/f$ is meromorphic on $\mathcal H$, including at zeros of $f$, and the weight-$k$ transformation laws cancel:
> $$
> \frac{g(\gamma\tau)}{f(\gamma\tau)}=\frac{g(\tau)}{f(\tau)}\qquad(\gamma\in\Gamma).
> $$
> At an elliptic point its invariant Laurent expansion has only powers divisible by the effective stabilizer order, so it is meromorphic in the quotient coordinate. At a cusp the quotient of the two Laurent expansions is meromorphic in the surface parameter. In odd weight at an irregular cusp the common half-integral exponent cancels, leaving integral powers. Hence $g/f\in\mathbb C(X(\Gamma))$.
>
> Conversely, if $h\in\mathbb C(X(\Gamma))$, its pullback is invariant and meromorphic with finite Laurent principal parts at the cusps. Multiplication by $f$ preserves the weight-$k$ law and cusp meromorphy, so $hf\in A_k(\Gamma)$. This proves both inclusions. Multiplication by nonzero $f$ is injective, so this also describes $A_k(\Gamma)$ as a one-dimensional vector space over the function field.

## Related Concepts

- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/Modular Functions|Modular Functions]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 88 / PDF 102. The solution above is independently derived.
- **Routing:** The principal toolkit is modular-forms; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
