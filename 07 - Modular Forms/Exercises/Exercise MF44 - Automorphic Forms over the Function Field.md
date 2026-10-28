---
title: "Exercise MF44: Automorphic Forms over the Function Field"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.2, Exercise 3.2.4, printed p. 77, PDF p. 91"
source_refs:
  - "S7/ch-3/sec-2/ex-4"
created: 2026-10-28
---

# Exercise MF44: Automorphic Forms over the Function Field

## Problem Statement

> [!question] Original Exercise 3.2.4
> Show that for any $k\in\mathbb Z$, if $f$ is a nonzero element of $\mathcal A_k(\Gamma)$ then $\mathcal A_k(\Gamma)=\mathbb C(X(\Gamma))f$.

## Hints

> [!hint]- Hint 1
> Divide a second weight-$k$ form by $f$; the automorphy factors cancel.

> [!hint]- Hint 2
> At a cusp, quotient two Laurent series in a common translation variable. Their quotient still has finite principal part.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Let $g\in\mathcal A_k(\Gamma)$. The quotient $u=g/f$ is meromorphic on $\mathcal H$, allowing poles at zeros of $f$. For $\gamma\in\Gamma$ the weight factors cancel:
> $$
> u(\gamma\tau)
> =\frac{(c\tau+d)^kg(\tau)}{(c\tau+d)^kf(\tau)}
> =u(\tau).
> $$
> For any $\alpha\in SL_2(\mathbb Z)$,
> $$
> u[\alpha]_0=\frac{g[\alpha]_k}{f[\alpha]_k}.
> $$
> Both numerator and denominator are meromorphic at infinity in a common translation variable. A nonzero Laurent series is a power of that variable times a holomorphic unit, so its reciprocal has finite principal part. Their quotient is therefore meromorphic at the cusp. Thus $u\in\mathcal A_0(\Gamma)$.
>
> The identification $\mathcal A_0(\Gamma)=\mathbb C(X(\Gamma))$ follows from the quotient coordinates: invariance under the effective stabilizer at an elliptic point makes the Laurent exponents multiples of its period, and at a cusp weight-zero invariance gives a Laurent series in the width variable. Hence invariant meromorphic functions descend meromorphically through the local power and exponential coordinates. Conversely, pulling a meromorphic function on the compact quotient back through those coordinates gives an element of $\mathcal A_0(\Gamma)$.
>
> It follows that $g=uf\in\mathbb C(X(\Gamma))f$. Conversely, multiplying $f$ by any $u\in\mathbb C(X(\Gamma))=\mathcal A_0(\Gamma)$ gives a meromorphic function of weight $k$ with finite Laurent principal parts at every cusp. Thus $uf\in\mathcal A_k(\Gamma)$, proving both containments.
>
> The representing scalar function is unique: $u_1f=u_2f$ implies $u_1=u_2$ on the nonempty open set where $f$ is finite and nonzero, hence everywhere by the identity theorem for meromorphic functions. Thus the space is one dimensional over the function field.

## Related Concepts

- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/Modular Functions|Modular Functions]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 77 / PDF 91. The solution above is independently derived.
- **Imported inputs:** The quotient charts and the identity theorem for meromorphic functions are used. The assertion is conditional on a nonzero form of the specified weight; it does not assume existence in every weight.
- **Routing:** The principal toolkit is modular-forms; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
